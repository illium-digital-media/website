import StarRating from "./StarRating";
import { testimonials } from "../data/testimonials";

const TestimonialCards = () => {
  return (
    <div className="md:flex md:space-x-4 text-white">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`flex-1 rounded-lg mb-4 border border-cyan-400 bg-secondary`}
        >
          <div className="p-6">
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
      ))}
    </div>
  );
};

export default TestimonialCards;
