import FadeInText from "../FadeInTypingText";
import TestimonialCards from "../TestimonialsCards";
import TestimonialsSlider from "../TestimonialsSlider";
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";
import { motion } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const { isVisible: isTitleVisible, sectionRef: titleRef } = useVisibilityOnScroll();

  return (
    <div className="">
      <div className="text-center pb-6" ref={titleRef}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-bold text-white text-4xl max-sm:text-2xl pb-2"
        >
          <FadeInText text="What They Say About Us" />
        </motion.h2>
      </div>
      <TestimonialCards />
      <TestimonialsSlider />
    </div>
  );
};

export default TestimonialsSection;
