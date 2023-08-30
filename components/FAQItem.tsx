import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={`mb-4 rounded-lg shadow-lg border bg-secondary border-cyan-400`}>
      <div className="faq-section">
        <div
          className="flex justify-between cursor-pointer p-3 justify-between text-white items-center w-full"
          onClick={handleToggle}
        >
          <div className="font-semibold">{question}</div>
          <div>{isOpen ? "-" : "+"}</div>
        </div>

        <div
          className={`overflow-hidden transition-all ease-in-out duration-500 ${isOpen
            ? "max-h-96"
            : "max-h-0"
            }`}
        >
          <div className="p-3 pt-1 rounded-b-lg text-gray-300">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
