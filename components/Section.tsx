import { DarkModeContext } from './DarkModeContext';
import React, { useContext } from 'react';

interface SectionProps {
  children: React.ReactNode;
  index: number;
}

const Section: React.FC<SectionProps> = ({ children, index }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const bgColorLightMode = index % 2 === 0 ? 'bg-white' : 'bg-gray-200';
  const bgColorDarkMode = index % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800';

  return (
    <section
      className={`py-20 max-lg:py-10 ${darkMode ? bgColorDarkMode : bgColorLightMode}`}
      style={{ transition: "background-color 0.5s ease" }}
    >
      {children}
    </section>
  );
};

export default Section;
