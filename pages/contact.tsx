import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Head from "next/head";
import CommonLanding from "@/components/sections/CommonLanding";
import Section from "@/components/Section";
import { contactCards } from "@/data/contactcards";
import ContactUsSection from "@/components/sections/ContactUsSection";

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Contact Us"} />
      <div className="bg-primary">
        <Section index={0}>
          <ContactUsSection />
        </Section>
      </div>

    </>
  );
};

export default ContactPage;
