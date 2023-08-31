import FadeInText from "../FadeInTypingText";
import IntroCards from "../IntroCards";
import IntroCardsSlider from "../IntroCardsSlider";

const IntroSection: React.FC = () => {
  return (
    <div className="relative pt-20">
      <div className="text-center pb-6 z-10">
        <h2 className="font-bold text-white text-4xl pb-2"><FadeInText text="What We Do" /></h2>
      </div>
      <div className="max-sm:hidden">
        <IntroCards />
      </div>
      <div className="sm:hidden">
        <IntroCardsSlider />
      </div>

    </div>
  );
};

export default IntroSection;
