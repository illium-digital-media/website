import React, {  useContext } from "react";
import EmailIcon from "../components/Icons/Email";
import PhoneIcon from "../components/Icons/Phone";
import ContactItem from "./ContactItem";
import SocialMediaLink from "./SocialMediaLink";
import { socialMediaLinks } from "./data/socialmedialinks";
import { DarkModeContext } from "../components/DarkModeContext";

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer className={`text-white ${darkMode ? 'bg-zinc-600' : 'bg-primary' } max-xl:px-4`}>
      <div className="max-w-screen-xl m-auto">
        <div className="py-10 md:flex justify-between">
          <div className="sm:flex max-sm:pb-5">
            <div className="max-sm:pb-5">
              <ContactItem
                icon={<EmailIcon />}
                title="Email Address"
                value="example@gmail.com"
              />
            </div>

            <ContactItem
              icon={<PhoneIcon />}
              title="Phone Number"
              value="0123 456 789"
            />
          </div>
          <div className="flex">
            {socialMediaLinks.map((link, index) => (
              <div key={index} className={`border-solid border-gray-200 p-2`}>
                <SocialMediaLink href={link.href} icon={link.icon} />
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="text-center">
          <div className="p-2">
            <p className="text-sm">
              &copy; 2023 Your Website. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
