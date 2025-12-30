export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-[#0b1c3f] via-[#142c6d] to-[#1f3aa8] text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        WCAGenius – Smarter <br /> Accessibility Testing for Every Website
                    </h1>
                    <p className="mt-6 text-lg text-blue-100 max-w-xl">
                        Instantly audit your website for WCAG 2.1 compliance.
                        Fast, accurate, and user-friendly.
                    </p>

                    <div className="mt-8">
                        <a
                            href="#live-scan"
                            className="inline-flex items-center justify-center px-8 py-4
             rounded-xl bg-blue-600 text-white font-semibold
             hover:bg-blue-700 transition"
                        >
                            Audit Your Site Now
                        </a>

                    </div>
                </div>

                {/* Decorative mock UI */}
                <div aria-hidden className="hidden md:block">
                    <img
                        src="/images/mock-dashboard.png"
                        alt=""
                        className="w-full drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
