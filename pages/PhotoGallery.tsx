import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const PhotoGallery: React.FC<{ images: string[] | StaticImageData[] }> = (
  props
) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      (prevIndex + 1) % (props.images?.length || 1)
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? (props.images?.length || 1) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <Image
        src={props.images?.[selectedImageIndex]}
        alt={`Image ${selectedImageIndex + 1}`}
        className="cursor-pointer rounded-xl"
        onClick={handleNextImage}
      />
      {props.images?.length && props.images.length > 1 && (
        <>
          <span
            className="absolute top-1/2 left-4 text-white text-4xl cursor-pointer"
            onClick={handlePrevImage}
          >
            &#8249;
          </span>
          <span
            className="absolute top-1/2 right-4 text-white text-4xl cursor-pointer"
            onClick={handleNextImage}
          >
            &#8250;
          </span>
        </>
      )}
    </div>
  );
};

export default PhotoGallery;
