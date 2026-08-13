import {
  Navbar,
  HeroSection,
  TrustStrip,
  SolutionsSection,
  CapabilitiesSection,
  MisionVisionSection,
  ValueProps,
  RegulatoryStrip,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="overlay" />
      <main>
        <HeroSection />
        <TrustStrip />
        <SolutionsSection />
        <CapabilitiesSection />
        <MisionVisionSection />
        <ValueProps />
        <RegulatoryStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;