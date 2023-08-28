import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSlider: React.FC<{}> = ({ }) => {
  var settings = {
    dots: true,
    infinite: false,
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
    <div className="overflow-x-clip h-full">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} name={item.name} comment={item.comment} company={item.company}  />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;