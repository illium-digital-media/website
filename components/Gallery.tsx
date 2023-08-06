import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { galleryPhotos } from "./data/galleryphotos";
import { DarkModeContext } from "./DarkModeContext";

// Sample service categories (replace with your actual categories)
const serviceCategories = ["All", "Exterior", "Interior", "Other"];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fadeOut, setFadeOut] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  // Filter images based on the selected category
  const filteredImages =
    selectedCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((image) => image.category === selectedCategory);

  // Handle category button clicks
  const handleCategoryClick = (category: string) => {
    setFadeOut(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setFadeOut(false);
    }, 500); // Adjust the duration (in milliseconds) to match the CSS transition duration
  };

  useEffect(() => {
    // If images are already loaded (during client-side navigation), don't execute this logic again
    if (imagesLoaded) return;

    // Wait for all images to load
    const imageElements = document.querySelectorAll("img");
    const promises = Array.from(imageElements).map((img) => {
      return new Promise<void>((resolve) => {
        if (img.complete) resolve();
        img.onload = () => resolve();
      });
    });

    Promise.all(promises).then(() => {
      // Set the imagesLoaded state to true after all images are loaded
      setImagesLoaded(true);
    });
  }, [imagesLoaded]);

  return (
    <div className=" items-start">
      <div className="text-center pb-6">
        <h3 className={`font-bold text-1xl ${darkMode ? "text-white" : "text-primary"}`}>Latest Projects</h3>
        <h4 className="font-bold text-4xl pb-2">
          Awesome Projects That Could Inspire You
        </h4>
        <p>
          Check out our latest projects where we showcase our expertise in
          delivering exceptional painting and decorating services to residential
          and commercial clients. From transforming living spaces to
          revitalizing commercial establishments, our portfolio reflects our
          commitment to quality and customer satisfaction.
        </p>
      </div>
      <div className="text-center">
        {serviceCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 mx-2 rounded mb-3 ${
              category === selectedCategory
                ? "bg-primary text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredImages.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt={image.category}
            className={`max-w-sm sm:mx-2 mb-3 transform scale-0 transition-all duration-500 ease-in-out hover:scale-200 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
            style={{ borderRadius: "8px" }}
            onLoad={(e) => {
              const imgElement = e.target as HTMLImageElement;
              imgElement.style.transform = "scale(1)";
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
