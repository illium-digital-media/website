import IntroSection from "../components/sections/IntroSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import LandingSection from "../components/sections/LandingSection";
import Head from "next/head";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactUsSection from "@/components/sections/ContactUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import { projects } from "@/data/projects";

const sections = [
  <IntroSection key="intro" />,
  <AboutUsSection key="about" />,
  <WhyUsSection key="why-us" />,
  <PortfolioSection key="portfolio" />,
  <ProcessSection key="process" />,
  <FAQ key="faq" />,
  <TestimonialsSection key="testimonials" />,
  <ContactUsSection key="contact" />
];

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to Illium Digital Media - Crafting extraordinary digital experiences. Explore our unique web development services, tailored to bring your vision to life."
        />
        {projects.map((project) => (
          <link key={project.id} rel="preload" href={project.imagePath.src} as="image" />
        ))}
      </Head>
      <LandingSection />
      {sections.map((section, index) => (
        <Section index={index} key={index} gradient={index === 0} totalSections={sections.length}>{section}</Section>
      ))}
    </>
  );
};

export default HomePage;
