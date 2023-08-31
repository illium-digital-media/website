import React from "react";

interface FAQButtonProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}


const FAQButton: React.FC<FAQButtonProps> = ({ isActive, onClick, label }) => {
  const buttonClass = isActive
    ? "bg-gradient-to-t from-orange-800 via-orange-700 to-orange-800 text-orange-100"
    : "bg-tertiary text-gray-300 hover:shadow-cyan-glow hover:bg-gradient-to-t hover:from-orange-800 hover:via-orange-700 hover:to-orange-800 hover:text-orange-100 duration-200";

  return (
    <button
      className={`max-sm:w-full max-sm:mb-3 sm:mx-3 px-4 py-2 rounded-lg transition-colors duration-200 ${buttonClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FAQButton;
