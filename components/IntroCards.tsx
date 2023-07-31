import Link from "next/link";
import Image from "next/image";
import residentialImage from "../assets/residential-intro.svg";
import commercialImage from "../assets/commercial-intro.svg";
import exteriorImage from "../assets/exterior-intro.svg";
import { DarkModeContext } from "./DarkModeContext";
import React, { useContext } from "react";

const introCards = [
  {
    name: "Interior Painting",
    comment:
      "Transform homes with expert interior painting services, bringing your vision to life with flawless finishes.",
    image: residentialImage,
    link: "/services/interior",
  },
  {
    name: "Commercial Painting",
    comment:
      "Elevate business spaces with professional commercial painting, creating inviting environments aligned with your brand identity.",
    image: commercialImage,
    link: "/services/commercial",
  },
  {
    name: "Exterior Painting",
    comment:
      "Protect and beautify properties with top-quality exterior painting, leaving a lasting impression with eye-catching finishes.",
    image: exteriorImage,
    link: "/services/exterior",
  },
  // Add more dummy intros as needed
];

const IntroCards = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="justify-between max-md:flex-wrap sm:flex sm:px-5">
      {introCards.map((intro, index) => (
        <div
          key={index}
          className={`sm:mx-1 px-5 py-20 max-md:w-full max-sm:py-10 max-sm:mb-3 text-center border border-gray-300 rounded-lg mb-4 shadow-lg ${
            darkMode ? "bg-zinc-700" : "bg-white"
          }`}
          // Add margin here to create spacing
        >
          <div className="p-3 shadow-lg rounded-full inline-block overflow-hidden mb-5 bg-white">
            <Image alt={intro.name} src={intro.image} width={60} height={60} />
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-semibold pb-2">{intro.name}</h3>
            <p className=" pb-5">{intro.comment}</p>
            <Link href={intro.link}>
              <button className=" bg-primary text-white p-3 text-xs rounded font-bold uppercase border-2  border-primary mr-2  hover:bg-white hover:text-primary hover:border-primary duration-200">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntroCards;
