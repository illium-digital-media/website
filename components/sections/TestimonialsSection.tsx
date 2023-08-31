import FadeInText from "../FadeInTypingText";
import TestimonialCards from "../TestimonialsCards";
import TestimonialsSlider from "../TestimonialsSlider";
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";

const TestimonialsSection: React.FC = () => {
  const { isVisible: isTitleVisible, sectionRef: titleRef } = useVisibilityOnScroll();
  const { isVisible: isTestimonialsVisible, sectionRef: testimonialsRef } = useVisibilityOnScroll();

  return (
    <div className="">
      <div className="text-center pb-6" ref={titleRef}>
        <h2 className={`font-bold text-white text-4xl pb-2 ${isTitleVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <FadeInText text="What They Say About Us" />
        </h2>
      </div>
      <div className={`max-sm:hidden ${isTestimonialsVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} ref={testimonialsRef}>
        <TestimonialCards />
      </div>
      <div className={`sm:hidden ${isTestimonialsVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} ref={testimonialsRef}>
        <TestimonialsSlider />
      </div>
    </div>
  );
};

export default TestimonialsSection;
