import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSlider: React.FC<{}> = ({ }) => {

  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: "100px",
    adaptiveHeight: false,
    variableWidth: false,
    innerHeight: '20px',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          centerPadding: "10px",
        },
      },

    ],
  };

  return (
    <div className="lg:hidden flex flex-col">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} name={item.name} comment={item.comment} company={item.company} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;