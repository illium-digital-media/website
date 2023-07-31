import { DarkModeContext } from "./DarkModeContext";
import React, { useContext } from "react";

interface SectionProps {
  children: React.ReactNode;
  index: number;
}

const Section: React.FC<SectionProps> = ({ children, index }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const bgColorLightMode = index % 2 === 0 ? "bg-white" : "bg-gray-200";
  const bgColorDarkMode = index % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800";

  return (
    <section
      className={`py-20 max-lg:py-10 max-xl:px-5 ${
        darkMode ? bgColorDarkMode : bgColorLightMode
      }`}
      style={{ transition: "background-color 0.5s ease" }}
    >
      <div className="m-auto max-w-screen-xl">{children}</div>
    </section>
  );
};

export default Section;
