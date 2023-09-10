import FadeInText from "../FadeInTypingText";
import IntroCardsSlider from "../ServiceCardsSlider";
import ServicesShortCards from "../ServicesShortCards";

const ServicesSectionShort: React.FC = () => {
  return (
    <div className="relative pt-20">
      <div className="text-center pb-6 z-10">
        <h2 className="font-bold text-white text-4xl max-sm:text-2xl pb-2">
          <FadeInText text="What We Do Best" highlightedWords={['What']} />
        </h2>
      </div>
      <ServicesShortCards />
      <IntroCardsSlider />
    </div>
  );
};

export default ServicesSectionShort;
