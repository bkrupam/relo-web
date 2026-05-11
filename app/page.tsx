import ScrollHeroDemo from "./components/ScrollHeroDemo";
import FeaturesScroll from "./components/FeaturesScroll";
import CommandSection from "./components/CommandSection";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <ScrollHeroDemo />
      <FeaturesScroll />
      <CommandSection />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
