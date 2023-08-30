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

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-4xl mx-auto" >

      <div className="w-full">
        <div ref={tabsRef}>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: tabsVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="pb-6 text-center font-bold text-4xl pb-2 text-white">
              <FadeInText text="Frequently Asked Questions" />
            </h4>

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
        </div>

        <div ref={itemsRef}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: itemsVisible ? 1 : 0 }}  // Use itemsVisible here
              exit={{ opacity: 0 }}
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
          </AnimatePresence>
        </div>


      </div>
    </div>
  );
};

export default FAQ;
