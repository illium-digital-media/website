import FadeInText from "../FadeInTypingText";
import IntroCards from "../IntroCards";
import IntroCardsSlider from "../IntroCardsSlider";

const IntroSection: React.FC = () => {
  return (
    <div className="relative pt-20">
      <div className="text-center pb-6 z-10">
        <h4 className="font-bold text-white text-4xl pb-2"><FadeInText text="What We Do"/></h4>
      </div>
      <IntroCards />
    </div>
    // <IntroCardsSlider/>
  );
};

export default IntroSection;
