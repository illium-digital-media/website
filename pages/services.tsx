import Section from "@/components/Section";
import CommonLanding from "@/components/sections/CommonLanding";
import ContactUsSection from "@/components/sections/ContactUsSection";
import Head from "next/head";

const sections = [
  <ContactUsSection key="contact" />
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
      <CommonLanding heading={"Services"} />
      {sections.map((section, index) => (
        <Section index={index} key={index} totalSections={sections.length}>{section}</Section>
      ))}

    </>
  );
};

export default HomePage;
