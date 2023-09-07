import React, { useState } from "react";
import { faqs } from "../data/faqs";
import FadeInText from "./FadeInTypingText";
import { motion, AnimatePresence } from "framer-motion";
import FAQButton from "./FAQButton";
import FAQItem from "./FAQItem";
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { isVisible: tabsVisible, sectionRef: tabsRef } = useVisibilityOnScroll();
  const { isVisible: itemsVisible, sectionRef: itemsRef } = useVisibilityOnScroll();
  const { isVisible: titleVisible, sectionRef: titleRef } = useVisibilityOnScroll(); // New title ref

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="w-full">

        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}} // Use titleVisible here
          transition={{ duration: 0.5 }}
          className="pb-6 text-center font-bold text-4xl max-sm:text-2xl pb-2 text-white"
        >
          <FadeInText text="Frequently Asked Questions" />
        </motion.h2>

        <motion.div
          ref={tabsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={tabsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="sm:flex justify-center mb-6">
            {faqs.map((category, index) => (
              <FAQButton
                key={index}
                isActive={activeTab === index}
                onClick={() => handleTabClick(index)}
                label={category.category}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={itemsRef}
          key={activeTab}
          initial={{ opacity: 0, y: 50  }}
          animate={itemsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`rounded-lg bg-gradient-to-r from-secondary to-cyan-400 p-0.5`}
        >
          <div className="h-full w-full bg-gradient-to-r from-secondary via-tertiary to-secondary p-5">
            {faqs[activeTab].questions.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
