import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import LandingSection from "../components/sections/LandingSection";
import Head from "next/head";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSectionShort from "@/components/sections/ServicesSectionShort";

const sections = [
  <ServicesSectionShort key="services" />,
  <WhyUsSection key="why-us" />,
  <PortfolioSection key="portfolio" />,
  <TimelineSection key="process" />,
  <FAQ key="faq" />,
  // <TestimonialsSection key="testimonials" />,
  <ContactUsSection key="contact" />
];

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
           {/* Google tag (gtag.js) */}
           <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-Z2XTG8XXNS"
        ></script>
        <script 
          dangerouslySetInnerHTML={{ 
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Z2XTG8XXNS');
            ` 
          }} 
        />
        <title>Illium Digital Media</title>
        <meta
          name="description"
          content="Welcome to Illium Digital Media - Crafting extraordinary digital experiences. Explore our unique web development services, tailored to bring your vision to life."
        />
      </Head>
      <LandingSection />
      {sections.map((section, index) => (
        <Section index={index} key={index} gradient={index === 0} totalSections={sections.length}>{section}</Section>
      ))}
    </>
  );
};

export default HomePage;
