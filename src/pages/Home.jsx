import { ChakraProvider } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import { BenefitsSection } from "../components/BenefitsSection";
import About from "../components/About";
import { CallToActionSection } from "../components/CallToActionSection";
import Services from "../components/Service";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <ChakraProvider>
      <Hero />
      <About />
      <Services />
      <BenefitsSection />
      <Testimonials />
      <Blog />
      <CallToActionSection />
    </ChakraProvider>
  );
};
export default Home;
