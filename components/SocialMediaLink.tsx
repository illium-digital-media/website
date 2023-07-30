import React, { ReactElement } from "react";

interface SocialMediaLinkProps {
  href: string;
  icon: ReactElement;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ href, icon }) => {
  return (
    <div className="h-10 w-10 flex justify-center items-center border bg-white border-solid border-gray-200 rounded-lg">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </div>
  );
};

export default SocialMediaLink;
