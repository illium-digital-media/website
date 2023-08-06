import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";
import examplePainting from "../assets/example-painter.png";
import { faqs } from "./data/faqs";

const FAQ: React.FC = () => {
  const [openItemIndices, setOpenItemIndices] = useState<number[]>([]);
  const { darkMode } = useContext(DarkModeContext);

  const toggleItem = (index: number) => {
    setOpenItemIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((itemIndex) => itemIndex !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <div className="sm:flex">
      <div className="max-sm:hidden sm:w-1/2">
        <Image src={examplePainting} width={500} height={500} alt={"Test"} />
      </div>
      <div className="sm:w-1/2">
        <div className="pb-6">
          <h3 className={`font-bold text-1xl ${darkMode ? "text-white" : "text-primary"}`}>FAQ</h3>
          <h4 className="font-bold text-4xl pb-2">Our Most Common Questions</h4>
          <p>
            Browse through our frequently asked questions to find quick and
            helpful answers about our painting and decorating solutions.
          </p>
        </div>
        {faqs.map((item, index) => (
          <div key={index} className={`mb-4 rounded-lg shadow-lg bg-primary`}>
            <div
              className={`faq-section ${
                openItemIndices.includes(index) ? "open" : "closed"
              } overflow w-hidden transition-max-h duration-300`}
            >
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="flex p-3 justify-between text-white items-center w-full">
                  <div className="font-semibold">{item.question}</div>
                  <div>{openItemIndices.includes(index) ? "-" : "+"}</div>
                </div>
              </div>

              {openItemIndices.includes(index) && (
                <div
                  className={`mt-2 bg-white p-3 rounded-b-lg ${
                    darkMode ? "bg-zinc-500" : "bg-white"
                  }`}
                >
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
