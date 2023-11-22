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
        <title>About Us - Illium Digital Media</title>
        <meta name="description" content="Discover the story behind Illium Digital Media. Meet the team of experienced web developers and learn about our mission to make quality web presence accessible to businesses of all sizes." />

      </Head>
      <CommonLanding heading={"About Us"} />
      {sections.map((section, index) => (
        <Section index={index} key={index} totalSections={sections.length}>{section}</Section>
      ))}
    </>
  );
};

export default AboutPage;
