import Image from "next/image";
import examplePainting from "../../assets/example-painter.png";
import GraduationIcon from "../../components/Icons/Graduation";
import TickIcon from "../Icons/Tick";
import HourglassIcon from "../Icons/Hourglass";
import HeadsetIcon from "../Icons/Headset";
import PriceIcon from "../Icons/Price";
import RecycleIcon from "../Icons/Recycle";
import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

const chooseUs = [
  {
    title: "Experienced Professionals",
    content: "Years of expertise for expert advice and craftsmanship.",
    image: <GraduationIcon />,
  },
  {
    title: "Quality Assurance",
    content: "Top-grade materials and proven methods for a stunning finish.",
    image: <TickIcon />,
  },
  {
    title: "Exceptional Customer Service",
    content: "Attentive, personalized service from start to finish.",
    image: <HeadsetIcon />,
  },
  {
    title: "Timely Delivery",
    content: "Adhering strictly to project timelines for on-time completion.",
    image: <HourglassIcon />,
  },
  {
    title: "Competitive Pricing",
    content: "Exceptional services at fair rates, no compromise on quality.",
    image: <PriceIcon />,
  },
  {
    title: "Environmentally Conscious",
    content: "Eco-friendly materials and sustainable practices.",
    image: <RecycleIcon />,
  },
];

const WhyUsSection: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="lg:flex">
      <div className="sm:w-1/2 lg:hidden  flex justify-center pb-10">
        <Image src={examplePainting} width={500} height={500} alt={"Test"} />
      </div>
      <div className="w-1/2 max-lg:w-full  max-lg:px-5">
        <div className="pb-6 max-lg:text-center">
          <h3 className="font-bold text-primary text-1xl">Why Choose Us</h3>
          <h4 className="font-bold  text-4xl pb-2">
            Always on Time And Never Delay A Project
          </h4>
          <p>
            Choosing us means choosing excellence. Explore what sets us apart
            and why we are the go-to experts for all your painting and
            decorating needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {chooseUs.map((item, index) => (
            <div
              key={index}
              className={`sm:mx-1 max-sm:mb-3  rounded-lg mb-2  flex`}
            >
              <div className="flex">
                <div className=" mr-5 text-primary">{item.image}</div>
                <div>
                  <h3 className="text-1xl font-bold pb-2 ">{item.title}</h3>
                  <p className="">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:w-1/2 max-lg:hidden">
        <Image src={examplePainting} width={500} height={500} alt={"Test"} />
      </div>
    </div>
  );
};

export default WhyUsSection;
