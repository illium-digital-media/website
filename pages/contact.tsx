import Head from "next/head";
import CommonLanding from "@/components/sections/CommonLanding";
import Section from "@/components/Section";
import ContactUsSection from "@/components/sections/ContactUsSection";

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Illium Digital Media</title>
        <meta name="description" content="Get in touch with Illium Digital Media for all your web development needs. Reach out to our team for consultations, inquiries, and collaborations. Let's build your digital dreams together." />
      </Head>
      <CommonLanding heading={"Contact Us"} />
      <div className="bg-primary">
        <Section index={0} totalSections={1}>
          <ContactUsSection />
        </Section>
      </div>

    </>
  );
};

export default ContactPage;
