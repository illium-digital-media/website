import StarRating from "./StarRating";
import { testimonials } from "../data/testimonials";

const TestimonialCards = () => {
  return (
    <div className="md:flex text-white">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`mx-3 rounded-lg mb-4 bg-gradient-to-r from-secondary to-cyan-400 p-0.5`}
        >
          <div className="h-full bg-gradient-to-r from-secondary via-tertiary to-secondary">
            <div className="p-5">
              <StarRating rating={4} />
              <p className="py-3">&quot;{testimonial.comment}&quot;</p>
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="">{testimonial.company}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCards;
