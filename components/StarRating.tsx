import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const filledStars = Math.round(rating * 2) / 2;

  return (
    <div className="star-rating text-orange-600">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star pr-2 text-2xl ${index < filledStars ? "filled" : "empty"}`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
