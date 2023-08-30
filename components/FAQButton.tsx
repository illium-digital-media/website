import React from "react";

interface FAQButtonProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

const FAQButton: React.FC<FAQButtonProps> = ({ isActive, onClick, label }) => {
  const buttonClass = isActive
    ? "bg-orange-400 text-white"
    : "bg-tertiary text-gray-300 hover:shadow-cyan-glow hover:bg-orange-400 hover:text-white";

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
