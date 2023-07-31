import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";
import examplePainting from "../assets/example-painter.png";

const faqs = [
  {
    question: "What painting and decorating services do you offer?",
    answer:
      "We provide a comprehensive range of services, including interior painting, exterior painting, wallpaper installation, surface preparation, color consultation, and more.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured to ensure the highest level of professionalism and protection for both our clients and our team.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Absolutely! You can view our portfolio showcasing completed projects and testimonials from satisfied clients.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we offer free estimates for all painting and decorating projects. Contact us to schedule a consultation and receive a detailed quote.",
  },
  {
    question: "What type of paints and materials do you use?",
    answer:
      "We use high-quality paints and materials from reputable brands, ensuring a durable and professional finish for every project.",
  },
  {
    question: "Do you offer any special promotions or discounts?",
    answer:
      "We occasionally run special promotions and discounts. Check our website or contact us directly for any ongoing offers.",
  },
];

const FAQ: React.FC = () => {
  const [openItemIndices, setOpenItemIndices] = useState<number[]>([]);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

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
    <div className="max-w-screen-xl m-auto max-lg:px-5 sm:flex">
      <div className="max-sm:hidden sm:w-1/2">
        <Image src={examplePainting} width={500} height={500} alt={"Test"} />
      </div>
      <div className="sm:w-1/2">
        <div className="pb-6">
          <h3 className="font-bold text-blue-900 text-1xl">FAQ</h3>
          <h4 className="font-bold text-blue-900 text-3xl pb-2">
            Our Most Common Questions
          </h4>
          <p>
            Browse through our frequently asked questions to find quick and
            helpful answers about our painting and decorating solutions.
          </p>
        </div>{" "}
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
