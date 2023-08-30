import React, { useState } from "react";
import { faqs } from "../data/faqs";
import FadeInText from "./FadeInTypingText";
import { motion, AnimatePresence } from "framer-motion";

const FAQ: React.FC = () => {
  const [openItemIndices, setOpenItemIndices] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenItemIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((itemIndex) => itemIndex !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setOpenItemIndices([]); // Reset the open items
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="w-full">
        <h4 className="pb-6 text-center font-bold text-4xl pb-2 text-white">
          <FadeInText text="Frequently Asked Questions" />
        </h4>

        <div className="sm:flex justify-center mb-6">
          {faqs.map((category, index) => (
            <button
              key={index}
              className={`max-sm:w-full max-sm:mb-3 sm:mx-3 px-4 py-2 rounded-lg ${activeTab === index
                ? "bg-orange-400 text-white"
                : "bg-tertiary text-gray-300 hover:shadow-cyan-glow"
                } hover:bg-orange-400 hover:text-white transition-colors duration-200`}
              // ... other classes ...
              onClick={() => handleTabClick(index)}
            >
              {category.category}
            </button>
          ))}
        </div>

        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`rounded-lg bg-gradient-to-r from-secondary to-cyan-400 p-0.5`}
          >
            <div className="h-full w-full bg-gradient-to-r from-secondary via-tertiary to-secondary p-5">
              {faqs[activeTab].questions.map((item, index) => (
                <div key={index} className={`mb-4 rounded-lg shadow-lg border bg-secondary border-cyan-400`}>
                  <div className="faq-section">
                    <div
                      className="flex justify-between cursor-pointer p-3 justify-between text-white items-center w-full"
                      onClick={() => toggleItem(index)}
                    >
                      <div className="font-semibold">{item.question}</div>
                      <div>{openItemIndices.includes(index) ? "-" : "+"}</div>
                    </div>

                    {/* FAQ Answer */}
                    <div
                      className={`overflow-hidden transition-all ease-in-out duration-500 ${openItemIndices.includes(index)
                        ? "max-h-96"
                        : "max-h-0"
                        }`}
                    >
                      <div className="p-3 pt-1 rounded-b-lg text-gray-300">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FAQ;
