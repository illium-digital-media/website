import React from "react";
import EmailIcon from "../components/Icons/Email";
import PhoneIcon from "../components/Icons/Phone";
import FacebookIcon from "../components/Icons/Facebook";
import InstagramIcon from "../components/Icons/Instagram";
import TwitterIcon from "../components/Icons/Twitter";
import YouTubeIcon from "../components/Icons/YouTube";
import ContactItem from "./ContactItem";
import SocialMediaLink from "./SocialMediaLink";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/The-Perfect-Painter-112497620634903/",
    icon: <FacebookIcon />, // Replace with the actual Facebook icon component
  },
  {
    href: "https://www.instagram.com/perfectpainter/",
    icon: <InstagramIcon />, // Replace with the actual Instagram icon component
  },
  {
    href: "https://twitter.com/painter_perfect",
    icon: <TwitterIcon />, // Replace with the actual Twitter icon component
  },
  {
    href: "https://www.youtube.com/channel/UCBPuYpftlOCYALZYZm0IT1g",
    icon: <YouTubeIcon />, // Replace with the actual YouTube icon component
  },
];

const Footer = () => {
  return (
    <footer className="text-white bg-zinc-600 max-lg:px-4">
      <div className="max-w-screen-xl m-auto">
        <div className="py-10 md:flex justify-between">
          <div className="sm:flex max-sm:pb-5">
            <div className="max-sm:pb-5">
              <ContactItem
                icon={<EmailIcon />} // Replace with the actual email icon component
                title="Email Address"
                value="example@gmail.com"
              />
            </div>

            <ContactItem
              icon={<PhoneIcon />} // Replace with the actual phone icon component
              title="Phone Number"
              value="0123 456 789"
            />
          </div>
          <div className="flex">
            {socialMediaLinks.map((link, index) => (
              <div key={index} className={`  border-solid border-gray-200 p-2`}>
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
