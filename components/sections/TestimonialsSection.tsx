import FadeInText from "../FadeInTypingText";
import TestimonialCards from "../TestimonialsCards";
import TestimonialsSlider from "../TestimonialsSlider";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="">
      <div className="text-center pb-6">
        <h4 className="font-bold text-white text-4xl pb-2"><FadeInText text="What They Say About Us" /> </h4>
      </div>
      <div className="max-sm:hidden">
        <TestimonialCards />
      </div>
      <div className="sm:hidden">
        <TestimonialsSlider />
      </div>
    </div>
  );
};

export default TestimonialsSection;
