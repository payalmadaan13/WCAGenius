import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import LiveScan from "../components/LiveScan";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <LiveScan />
      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-700 text-sm">
          © 2025 WCAGenius • Built with ⚡️ accessibility-first •{" "}
        </div>
      </footer>
    </>
  );
}
