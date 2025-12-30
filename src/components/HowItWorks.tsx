"use client";
import { useState } from "react";

export default function HowItWorks() {
  const [open, setOpen] = useState(true);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Three simple steps to ensure your site is accessible.
        </p>

        <div className="mt-10 border rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold bg-gray-50"
          >
            Accessibility Scan Flow
            <span aria-hidden>{open ? "−" : "+"}</span>
          </button>

          {open && (
            <ol className="grid md:grid-cols-3 gap-6 p-6 text-gray-700">
              <li>
                <span className="font-bold">1.</span> Enter your HTML or URL
              </li>
              <li>
                <span className="font-bold">2.</span> AI-powered WCAG analysis
              </li>
              <li>
                <span className="font-bold">3.</span> Get detailed reports
              </li>
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
