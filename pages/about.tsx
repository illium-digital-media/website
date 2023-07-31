import AboutUsSection from "../components/sections/AboutUsSection";
import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import Section from "@/components/Section";

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
      <Section index={0}>
        <AboutUsSection />
      </Section>
    </>
  );
};

export default AboutPage;
