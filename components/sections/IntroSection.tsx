import IntroCards from "../IntroCards";
import { DarkModeContext } from "../DarkModeContext";
import React, { useContext } from "react";

const IntroSection: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="">
      <div className="text-center pb-6">
        <h3 className={`font-bold text-1xl ${darkMode ? "text-white" : "text-primary"}`}>Services</h3>
        <h4 className="font-bold text-4xl pb-2">
          Transforming Spaces into Masterpieces
        </h4>
        <p>
          From elegant interiors to striking exteriors, our expert team delivers
          top-notch painting services that breathe life into your spaces.
          Whether it&apos;s residential or commercial, trust us to add the perfect
          touch of color and style, leaving you with a masterpiece you&apos;ll love.
        </p>
      </div>
      <IntroCards />
    </div>
  );
};

export default IntroSection;
