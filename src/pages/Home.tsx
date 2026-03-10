import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Projects } from "../components/Projects";
import { Pricing } from "../components/Pricing";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Pricing />
    </>
  );
}
