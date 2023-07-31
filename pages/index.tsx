import IntroSection from "../components/sections/IntroSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import PerfectPainterSection from "../components/sections/PerfectPainterSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import LandingSection from "../components/sections/LandingSection";
import Head from "next/head";
import Section from "@/components/Section";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <LandingSection />
      <Section index={0}>
        <IntroSection />
      </Section>
      <PerfectPainterSection />
      <AboutUsSection />
      <WhyUsSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
