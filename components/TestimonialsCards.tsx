import { testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialCards = () => {
  return (
    <div className="md:flex text-white">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} name={testimonial.name} comment={testimonial.comment} company={testimonial.company} />
      ))}
    </div>
  );
};

export default TestimonialCards;
