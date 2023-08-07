import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Head from "next/head";
import CommonLanding from "@/components/sections/CommonLanding";
import React, { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";
import Section from "@/components/Section";
import { contactCards } from "@/components/data/contactcards";

const ContactPage: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

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
            {contactCards.map((contact, index) => (
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
            <h3 className={`f-w-900 ${darkMode ? "text-white" : "text-primary"} text-4xl font-bold pb-1`}>
              Say Hi!
            </h3>
            <p className="pb-5">
              Send us your query and one of our agents will get back to you!
            </p>
            <ContactForm />
          </div>
          <div className="max-sm:hidden sm:w-1/2">
            {contactCards.map((contact, index) => (
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
