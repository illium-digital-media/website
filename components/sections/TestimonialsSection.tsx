import FadeInText from "../FadeInTypingText";
import TestimonialCards from "../TestimonialsCards";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="">
      <div className="text-center pb-6">
        <h4 className="font-bold text-white text-4xl pb-2"><FadeInText text="What They Say About Us"/> </h4>
      </div>
      <TestimonialCards />
    </div>
  );
};

export default TestimonialsSection;
