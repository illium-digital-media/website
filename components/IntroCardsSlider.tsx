import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { introCards } from "@/data/introcards";
import IntroCard from "./IntroCard";


const IntroCardsSlider: React.FC<{}> = ({ }) => {
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
    // Default is true, but you can explicitly set it here.
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
        {introCards.map((item, index) => (
          <IntroCard key={index} name={item.name} comment={item.comment} icon={item.icon} />
        ))}
      </Slider>
    </div>
  );
};

export default IntroCardsSlider;