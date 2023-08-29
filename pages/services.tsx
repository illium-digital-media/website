import Section from "@/components/Section";
import CommonLanding from "@/components/sections/CommonLanding";
import ContactUsSection from "@/components/sections/ContactUsSection";
import ServicesSectionLong from "@/components/sections/ServicesSectionLong";
import Head from "next/head";

const sections = [
  <ServicesSectionLong key="services" />,
  <ContactUsSection key="contact" />
];

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Explore our comprehensive range of web design and development services at Illium Digital Media. From user-centric UI/UX design to modern development techniques, we're here to elevate your online presence." />

      </Head>
      <CommonLanding heading={"Services"} />
      {sections.map((section, index) => (
        <Section index={index} key={index} totalSections={sections.length}>{section}</Section>
      ))}

    </>
  );
};

export default HomePage;
