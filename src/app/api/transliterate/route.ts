import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const ALLOWED_ORIGINS = [
  "https://xonixtech.com",
  "https://www.xonixtech.com",
  `https://${process.env.REPLIT_DEV_DOMAIN}`,
];

type RateEntry = { count: number; windowStartMs: number };
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 30;
const ipToRateEntry: Map<string, RateEntry> = new Map();

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return "unknown";
}

function corsHeaders(req: NextRequest): Headers {
  const origin = req.headers.get("origin") || "";
  const allowed = ALLOWED_ORIGINS.includes(origin);
  const headers = new Headers({
    Vary: "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });
  if (allowed) headers.set("Access-Control-Allow-Origin", origin);
  return headers;
}

function withSecurityHeaders(headers: Headers): Headers {
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "no-referrer");
  headers.set("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
  return headers;
}

function jsonResponse(body: unknown, init: { status?: number; headers?: Headers } = {}) {
  const headers = init.headers ?? new Headers();
  headers.set("Content-Type", "application/json");
  withSecurityHeaders(headers);
  return new NextResponse(JSON.stringify(body), { status: init.status ?? 200, headers });
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipToRateEntry.get(ip);
  if (!entry) {
    ipToRateEntry.set(ip, { count: 1, windowStartMs: now });
    return true;
  }
  if (now - entry.windowStartMs > RATE_LIMIT_WINDOW_MS) {
    entry.count = 1;
    entry.windowStartMs = now;
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

export async function OPTIONS(req: NextRequest) {
  const headers = corsHeaders(req);
  withSecurityHeaders(headers);
  return new NextResponse(null, { status: 204, headers });
}

export async function POST(req: NextRequest) {
  const headers = corsHeaders(req);

  const ip = getClientIp(req);
  if (!rateLimit(ip)) {
    return jsonResponse({ error: "Rate limit exceeded" }, { status: 429, headers });
  }

  let payload: { text?: unknown };
  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, { status: 400, headers });
  }

  const text = typeof payload.text === "string" ? payload.text.trim() : "";
  if (!text) {
    return jsonResponse({ error: "Missing 'text' string" }, { status: 400, headers });
  }
  if (text.length > 200) {
    return jsonResponse({ error: "Text too long (max 200 chars)" }, { status: 400, headers });
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error("GOOGLE_API_KEY is not set in environment variables");
    return jsonResponse({ error: "Server not configured" }, { status: 500, headers });
  }
  console.log("GOOGLE_API_KEY is configured");

  const prompt = `Transliterate the following English personal name(s) into Arabic script.\nReturn strict JSON only, no extra text, with keys: arabic (string), pronunciation (string).\nFollow Arabic phonetics (kh=خ, gh=غ, sh=ش, th(thing)=ث, th(this)=ذ, j=ج, ch=تش, q=ق).\nKeep spacing between first/middle/last names.\nInput: "${text}"`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  let upstream: Response;
  try {
    upstream = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.1, responseMimeType: "application/json" },
        }),
        signal: controller.signal,
      }
    );
  } catch {
    clearTimeout(timeoutId);
    return jsonResponse({ error: "Upstream unavailable" }, { status: 502, headers });
  } finally {
    clearTimeout(timeoutId);
  }

  if (!upstream.ok) {
    let errorDetails = "Unknown error";
    try {
      const errorData = await upstream.json();
      errorDetails = JSON.stringify(errorData);
      console.error("Google API Error:", errorDetails);
    } catch {
      errorDetails = await upstream.text().catch(() => "Could not read error");
      console.error("Google API Error (text):", errorDetails);
    }
    return jsonResponse({ 
      error: "Transliteration failed", 
      details: process.env.NODE_ENV === "development" ? errorDetails : undefined 
    }, { status: 502, headers });
  }

  type GeminiPart = { text?: string };
  type GeminiContent = { parts?: GeminiPart[] };
  type GeminiCandidate = { content?: GeminiContent };
  type GeminiResponse = { candidates?: GeminiCandidate[] };

  let data: GeminiResponse | null = null;
  try {
    data = (await upstream.json()) as GeminiResponse;
  } catch {
    return jsonResponse({ error: "Invalid upstream response" }, { status: 502, headers });
  }

  const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";
  let parsed: { arabic?: string; pronunciation?: string } = {};
  try {
    parsed = JSON.parse(raw);
  } catch {}

  return jsonResponse(
    {
      arabic: parsed.arabic ?? "",
      pronunciation: parsed.pronunciation ?? "",
    },
    { status: 200, headers }
  );
}


