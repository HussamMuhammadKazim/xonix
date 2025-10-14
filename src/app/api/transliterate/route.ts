import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

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

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("OPENAI_API_KEY is not set in environment variables");
    return jsonResponse({ error: "Server not configured" }, { status: 500, headers });
  }

  const openai = new OpenAI({ apiKey });

  const prompt = `Transliterate the following English personal name(s) into Arabic script.
Follow Arabic phonetics accurately (kh=خ, gh=غ, sh=ش, th(thing)=ث, th(this)=ذ, j=ج, ch=تش, q=ق).
Keep spacing between first/middle/last names.
Provide the Arabic script and romanized pronunciation.
Input: "${text}"

Respond with JSON in this format: { "arabic": "string", "pronunciation": "string" }`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert in Arabic transliteration. You accurately convert English names to Arabic script following proper Arabic phonetics and naming conventions."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
      max_tokens: 500,
    });

    if (!response.choices || response.choices.length === 0) {
      console.error("OpenAI returned empty choices array");
      return jsonResponse({ error: "Invalid AI response" }, { status: 502, headers });
    }

    const content = response.choices[0].message.content || "{}";
    let parsed: { arabic?: string; pronunciation?: string } = {};
    
    try {
      parsed = JSON.parse(content);
    } catch (parseError) {
      console.error("Failed to parse OpenAI response:", content);
      return jsonResponse({ error: "Invalid AI response" }, { status: 502, headers });
    }

    return jsonResponse(
      {
        arabic: parsed.arabic ?? "",
        pronunciation: parsed.pronunciation ?? "",
      },
      { status: 200, headers }
    );
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return jsonResponse(
      { 
        error: "Transliteration failed",
        details: process.env.NODE_ENV === "development" ? (error as Error).message : undefined
      },
      { status: 502, headers }
    );
  }
}


