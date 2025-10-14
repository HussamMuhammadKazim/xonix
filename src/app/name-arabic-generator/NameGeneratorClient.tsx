"use client";

import { useState } from "react";

async function transliterateNameRemote(name: string): Promise<{ arabic: string; pronunciation: string }> {
  const res = await fetch("/api/transliterate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: name }),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const message = (data && (data.error as string)) || "Transliteration failed";
    throw new Error(message);
  }
  return (data || { arabic: "", pronunciation: "" }) as { arabic: string; pronunciation: string };
}

export default function NameGeneratorClient() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState<"male" | "female" | "neutral">("male");
  const [result, setResult] = useState<{
    arabic: string;
    pronunciation: string;
    nicknames: string[];
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTranslate = async () => {
    const parts = [firstName, middleName, lastName].filter(Boolean);
    if (parts.length === 0) {
      setResult(null);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const results = await Promise.all(parts.map((p) => transliterateNameRemote(p)));
      const arabic = results.map((r) => r.arabic).join(" ").trim();
      const pronunciation = results.map((r) => r.pronunciation).join(" ").trim();
      setResult({ arabic, pronunciation, nicknames: [] });
    } catch (e) {
      setError((e as Error).message || "Unable to convert name right now. Please try again.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setGender("male");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-6">Generate Your Arabic Name</h2>
        
        <div className="space-y-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your first name"
            />
          </div>

          {/* Middle Name */}
          <div>
            <label htmlFor="middleName" className="block text-sm font-medium mb-2">
              Middle Name (optional)
            </label>
            <input
              type="text"
              id="middleName"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your middle name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your last name"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-2">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value as "male" | "female" | "neutral")}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value as "male" | "female" | "neutral")}
                  className="mr-2"
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="neutral"
                  checked={gender === "neutral"}
                  onChange={(e) => setGender(e.target.value as "male" | "female" | "neutral")}
                  className="mr-2"
                />
                Neutral
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleTranslate}
              className="btn flex-1"
              disabled={(!firstName.trim() && !lastName.trim()) || loading}
            >
              {loading ? "Converting…" : "Generate Arabic Name"}
            </button>
            <button
              onClick={clearForm}
              className="btn-secondary px-6 py-3"
              disabled={loading}
            >
              Clear
            </button>
          </div>
          {error && (
            <p className="text-sm text-red-600 mt-3">{error}</p>
          )}
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-6">Generated Arabic Name</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Arabic Name:</h3>
              <p className="text-3xl font-bold text-primary mb-2" dir="rtl">
                {result.arabic}
              </p>
              <p className="text-muted-foreground">
                ({firstName} {middleName} {lastName})
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Pronunciation:</h3>
              <p className="text-xl text-foreground font-medium">
                {result.pronunciation}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Common Nicknames:</h3>
              <div className="flex flex-wrap gap-2">
                {result.nicknames.map((nickname, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary rounded-full text-sm"
                  >
                    {nickname}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
