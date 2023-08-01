import { DarkModeContext } from "../DarkModeContext";
import React, { useContext } from "react";

const BurgerMenuIcon: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <>
      {[...Array(3)].map((_, index) => (
        <span
          key={index}
          className={`block h-0.5 w-8 ${darkMode ? "bg-white" : "bg-gray-600"}`}
        />
      ))}
    </>
  );
};

export default BurgerMenuIcon;
