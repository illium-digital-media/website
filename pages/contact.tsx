import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Head from "next/head";
import CommonLanding from "@/components/sections/CommonLanding";
import Section from "@/components/Section";

const contactData = [
  {
    heading: "Email us",
    copy: "For general inquiries and questions, contact us via email.",
    linkText: "example@gmail.com",
    link: "example@gmail.com",
  },
  {
    heading: "Call us",
    copy: "Tell us your needs and we’ll send you a free estimate.",
    linkText: "0123 456 789",
    link: "tel:0123456789",
  },
  {
    heading: "WhatsApp",
    copy: "For general inquiries and questions, reach us on WhatsApp.",
    linkText: "0123 456 789",
    link: "https://wa.link/",
  },
];

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
      <Section index={0}>
        <div className="flex max-sm:block max-w-screen-lg m-auto">
          <div className="sm:hidden sm:w-1/2 pb-5">
            {contactData.map((contact, index) => (
              <ContactCard
                key={index}
                heading={contact.heading}
                copy={contact.copy}
                linkText={contact.linkText}
                link={contact.link}
              />
            ))}
          </div>
          <div className="sm:pr-20 sm:w-1/2">
            <h3 className="f-w-900 text-blue-900 text-4xl font-bold pb-1">
              Say Hi!
            </h3>
            <p className="pb-5">
              Send us your query and one of our agents will get back to you!
            </p>
            <ContactForm />
          </div>
          <div className="max-sm:hidden sm:w-1/2">
            {contactData.map((contact, index) => (
              <ContactCard
                key={index}
                heading={contact.heading}
                copy={contact.copy}
                linkText={contact.linkText}
                link={contact.link}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
