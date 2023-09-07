import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSlider: React.FC<{}> = ({ }) => {

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
    variableWidth: false,
    innerHeight: '20px',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          adaptiveHeight: true,
          dots: false
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          adaptiveHeight: true,
        },
      }
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