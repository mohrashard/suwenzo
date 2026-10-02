import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import ProblemSection from "../components/ProblemSection";
import HowItWorks from "../components/HowItWorks";
import FeaturesSection from "../components/FeaturesSection";
import WhoAndWhySection from "../components/WhoAndWhySection";
import FaqSection from "../components/FaqSection";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <ProblemSection />
        <HowItWorks />
        <FeaturesSection />
        <WhoAndWhySection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
