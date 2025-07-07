import { ChakraProvider } from "@chakra-ui/react";
import { HeroSection } from "../components/HeroSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { AboutSection } from "../components/AboutSection";
import { CallToActionSection } from "../components/CallToActionSection";

export default function Home() {
  return (
    <ChakraProvider>
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <CallToActionSection />
    </ChakraProvider>
  );
}
