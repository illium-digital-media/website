import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import MoonIcon from "../Icons/Moon";
import SunIcon from "../Icons/Sun";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center p-2 rounded-full hover:text-primary"
    >
      {darkMode ? (
        <SunIcon color={"text-white"} hoverColor={"text-primary"} />
      ) : (
        <MoonIcon />
      )}
    </button>
  );
};

export default DarkModeToggle;
