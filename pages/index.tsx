import IntroSection from "../components/sections/IntroSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import PerfectPainterSection from "../components/sections/PerfectPainterSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import LandingSection from "../components/sections/LandingSection";
import Head from "next/head";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";

const sections = [
  <IntroSection />,
  <PerfectPainterSection />,
  <AboutUsSection />,
  <WhyUsSection />,
  <Gallery />,
  <TestimonialsSection />,
];

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
      {sections.map((section, index) => (
        <Section index={index}>{section}</Section>
      ))}
    </>
  );
};

export default HomePage;
