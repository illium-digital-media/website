import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { introCards } from "@/data/introcards";
import IntroCard from "./IntroCard";


const IntroCardsSlider: React.FC<{}> = ({}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: "30px",
    variableWidth: true,
    innerHeight:'40px',
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
    <div className="overflow-x-clip flex flex-col h-full">
      <Slider {...settings}>
        {introCards.map((item, index) => (
          <div className="flex flex-wrap px-1" key={index}>
            <IntroCard name={item.name} comment={item.comment} icon={item.icon} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IntroCardsSlider;