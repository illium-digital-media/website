import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { servicesShort } from "@/data/servicesshort";
import ServiceCard from "./ServiceCard";

const ServiceCardsSlider: React.FC<{}> = ({ }) => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: "150px",
    adaptiveHeight: false,
    variableWidth: true,
    innerHeight: '20px',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <div className="sm:hidden flex flex-col">
      <Slider {...settings}>
        {servicesShort.map((item, index) => (
          <ServiceCard key={index} name={item.name} comment={item.comment} icon={item.icon} />
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCardsSlider;