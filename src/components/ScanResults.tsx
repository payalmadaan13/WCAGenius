"use client";

type ScanResult = {
  id: string;
  impact: "critical" | "serious" | "moderate" | "minor";
  description: string;
  help: string;
};

const severityUI = {
  critical: {
    icon: "❌",
    class: "border-red-600 bg-red-50",
    label: "Critical",
  },
  serious: {
    icon: "⚠️",
    class: "border-yellow-600 bg-yellow-50",
    label: "Serious",
  },
  moderate: {
    icon: "⚠️",
    class: "border-orange-600 bg-orange-50",
    label: "Moderate",
  },
  minor: {
    icon: "ℹ️",
    class: "border-green-600 bg-green-50",
    label: "Minor",
  },
};

export default function ScanResults({ results }: { results: ScanResult[] }) {
  if (results.length === 0) {
    return (
      <p className="text-green-700 font-medium">
        No accessibility violations found 🎉
      </p>
    );
  }

  return (
    <section aria-labelledby="results-heading">
      <h2
        id="results-heading"
        className="text-xl font-semibold text-gray-900 mb-4"
      >
        Detected Issues
      </h2>

      <div className="space-y-4">
        {results.map((r, i) => {
          const ui = severityUI[r.impact];

          return (
            <details
              key={i}
              className={`border-l-4 rounded-lg p-5 shadow-sm ${ui.class}`}
            >
              <summary className="cursor-pointer flex items-center gap-3 font-semibold text-gray-900">
                <span aria-hidden>{ui.icon}</span>
                <span>{r.help}</span>
                <span className="ml-auto text-sm text-gray-600">
                  {ui.label}
                </span>
              </summary>

              <div className="mt-4 space-y-3 text-sm text-gray-800">
                <p>{r.description}</p>

                <div>
                  <strong>Rule:</strong> {r.id}
                </div>

                {/* AI-ready block */}
                <div className="mt-3 p-3 bg-white border rounded-md">
                  <strong>Suggested Fix (AI-assisted):</strong>
                  <p className="mt-1 text-gray-700">
                    Ensure this element follows WCAG guidelines by providing
                    accessible text, labels, or ARIA attributes.
                  </p>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
