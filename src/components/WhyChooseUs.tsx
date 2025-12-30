const FEATURES = [
    {
      title: "Fast & Accurate Results",
      desc: "Instant audits with precise WCAG checks.",
    },
    {
      title: "WCAG 2.1 Compliance",
      desc: "Meets WCAG 2.1 AA standards.",
    },
    {
      title: "Export to JSON",
      desc: "Download reports for developers.",
    },
    {
      title: "Actionable Insights",
      desc: "Clear, practical remediation guidance.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Choose Us?
          </h2>
          <p className="text-center text-gray-600 mt-2">
            The best choice for accessibility testing.
          </p>
  
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  