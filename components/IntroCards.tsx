import Link from "next/link";
import Image from "next/image";
import { DarkModeContext } from "./DarkModeContext";
import React, { useContext } from "react";
import { introCards } from "./data/introcards";

const IntroCards = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="justify-between max-md:flex-wrap sm:flex sm:px-5">
      {introCards.map((intro, index) => (
        <div
          key={index}
          className={`sm:mx-1 px-5 py-20 max-md:w-full max-sm:py-10 max-sm:mb-3 text-center border border-gray-300 rounded-lg mb-4 shadow-lg ${
            darkMode ? "bg-zinc-700" : "bg-white"
          }`}
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
