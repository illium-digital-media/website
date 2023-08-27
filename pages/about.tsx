import AboutUsSection from "../components/sections/AboutUsSection";
import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import Section from "@/components/Section";
import ContactUsSection from "@/components/sections/ContactUsSection";

const sections = [
  <AboutUsSection key="about" />,
  <ContactUsSection key="contact" />
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"About Us"} />
      {sections.map((section, index) => (
        <Section index={index} key={index} totalSections={sections.length}>{section}</Section>
      ))}
    </>
  );
};

export default AboutPage;
