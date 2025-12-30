"use client";

import { useState } from "react";
import AccessibilityAudit from "./AccessibilityAudit";
import ScanResults from "./ScanResults";

const DEMO_HTML = `
<img src="logo.png">
<button></button>
<h1></h1>
<input type="text">
`;

export default function LiveScan() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasScanned, setHasScanned] = useState(false);

  const runScan = async (demo = false) => {
    const html = demo ? DEMO_HTML : input;

    if (!html.trim()) {
      setError("Please paste URL/HTML.");
      return;
    }

    setLoading(true);
    setError("");
    setHasScanned(true);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html }),
      });

      if (!res.ok) throw new Error("Scan failed");

      const data = await res.json();
      setResults(data.results || []);
    } catch {
      setError("Scan failed. Check server logs.");
    } finally {
      setLoading(false);
    }
  };

  const exportResults = () => {
    const blob = new Blob([JSON.stringify(results, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "accessibility-results.json";
    a.click();
  };

  const score = Math.max(100 - results.length * 5, 0);

  return (
    <section
      id="live-scan"
      className="scroll-mt-24 bg-gray-50 py-16"
      aria-labelledby="live-scan-heading"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        <h2
          id="live-scan-heading"
          className="text-3xl font-bold text-gray-900"
        >
          Accessibility Audit
        </h2>

        {/* Info Banner */}
        <div className="rounded-lg bg-blue-50 border border-blue-100 p-4">
          <p className="text-sm text-blue-900">
            Paste your URL/HTML below to run an accessibility audit.
          </p>
        </div>

        {/* INPUT AREA */}
        <div
          className={`transition-all duration-300 ${hasScanned ? "opacity-60" : "opacity-100"
            }`}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={8}
            className="w-full p-4 border border-gray-300 rounded-xl
                       text-gray-900 bg-white
                       focus:ring-2 focus:ring-blue-500
                       focus:outline-none"
            placeholder="Paste raw HTML here…"
          />

          <div className="mt-4 flex gap-4">
            <button
              onClick={() => runScan()}
              disabled={loading}
              className="px-6 py-3 rounded-xl font-medium text-white
             bg-brand hover:bg-brand-dark
             transition focus:outline-none focus:ring-2
             focus:ring-brand focus:ring-offset-2"
            >
              {loading ? "Scanning…" : "Audit your site"}
            </button>

          </div>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        {/* RESULTS */}
        {hasScanned && !loading && (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-xl bg-white border shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">
                  Accessibility Score
                </h3>
                <p className="mt-2 text-4xl font-bold text-blue-600">
                  {score}/100
                </p>
              </div>

              <ScanResults results={results} />

              {results.length > 0 && (
                <button
                  onClick={exportResults}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl
                             hover:bg-blue-700 transition"
                >
                  Export Results
                </button>
              )}
            </div>

            {/* RIGHT */}
            <AccessibilityAudit violations={results} />
          </div>
        )}
      </div>
    </section>
  );
}
