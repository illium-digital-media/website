import { DarkModeContext } from "../components/DarkModeContext";
import React, { useContext } from "react";

const ContactCard: React.FC<{
  heading: string;
  copy: string;
  link: string;
  linkText: string;
}> = (props) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`p-5 rounded-lg mt-4 ${
        darkMode ? "bg-zinc-700" : "bg-gray-200"
      }`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <h5
        className={`${
          darkMode ? "text-white" : "text-primary"
        } text-2xl font-bold pb-2`}
      >
        {props.heading}
      </h5>
      <p className="">{props.copy}</p>
      <p>
        <a
          className={`${darkMode ? "text-white" : "text-primary"} text-base`}
          href={props.link}
        >
          <strong>{props.linkText}</strong>
        </a>
      </p>
    </div>
  );
};

export default ContactCard;
