import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { motion } from 'framer-motion';
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";

const TestimonialsSlider: React.FC<{}> = ({ }) => {
  const { isVisible, sectionRef } = useVisibilityOnScroll();

  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: "80px",
    adaptiveHeight: false,
    variableWidth: true,
    innerHeight: '20px',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`sm:hidden h-full`}
    >
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} name={item.name} comment={item.comment} company={item.company} />
        ))}
      </Slider>
    </motion.div>

  );
};

export default TestimonialsSlider;