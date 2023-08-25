import IntroSection from "../components/sections/IntroSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import LandingSection from "../components/sections/LandingSection";
import Head from "next/head";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import ContactUsSection from "@/components/sections/ContactUsSection";

const sections = [
  <IntroSection key="intro" />,
  <AboutUsSection key="about" />,
  <WhyUsSection key="why-us" />,
  <FAQ key="faq" />,
  <Gallery key="gallery" />,
  <TestimonialsSection key="testimonials" />,
  <ContactUsSection key="contact"/>
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
      <div className="bg-primary">
        <LandingSection />
        {sections.map((section, index) => (
          <Section index={index} key={index} gradient={index === 0}>{section}</Section>
        ))}
      </div>


    </>
  );
};

export default HomePage;
