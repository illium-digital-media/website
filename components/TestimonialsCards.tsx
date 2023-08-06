import Image from "next/image";
import { DarkModeContext } from "./DarkModeContext";
import React, { useContext } from "react";
import QuoteIcon from "./Icons/Quote";
import StarRating from "./StarRating";

const testimonials = [
  {
    name: "John Doe",
    comment:
      "The team at ABC Painting did a fantastic job refreshing the look of my home. The attention to detail and friendly service made the entire experience seamless and enjoyable.",
    city: "London",
  },
  {
    name: "Jane Smith",
    comment:
      "I highly recommend XYZ Decorators for their professional approach and timely completion of our office renovation. The new interior design has breathed new life into our workspace.",
    city: "London",
  },
  {
    name: "Mike Johnson",
    comment:
      "From start to finish, DEF Painters exceeded my expectations with their skillful work and courteous team. The result is a beautifully transformed exterior that has garnered numerous compliments from neighbors.",
    city: "London",
  },
];

const Testimonials = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="md:flex md:space-x-4">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`flex-1 border border-gray-300 rounded-lg mb-4 ${
            darkMode ? "bg-zinc-700" : "bg-white"
          }`}
        >
          <div className="p-6">
            <StarRating rating={4} />
            <p className="py-3">&quot;{testimonial.comment}&quot;</p>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="">{testimonial.city}</p>
              </div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                <QuoteIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
