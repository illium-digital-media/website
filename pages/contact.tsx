import Head from "next/head";
import CommonLanding from "@/components/sections/CommonLanding";
import Section from "@/components/Section";
import ContactUsSection from "@/components/sections/ContactUsSection";

const ContactPage: React.FC = () => {
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
