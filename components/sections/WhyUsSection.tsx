import FadeInText from "../FadeInTypingText";
import { whyChooseUs } from "../../data/whychooseus";
import WhyUsCard from "../WhyUsCard";

const WhyUsSection: React.FC = () => {

  return (
    <div className="lg:flex text-white">
      <div className="max-lg:w-full max-lg:px-5">
        <div className="pb-6 text-center">
          <h2 className="font-bold text-4xl max-sm:text-2xl pb-2">
            <FadeInText text="£0 Down, £100 Per Month, Pay as You Go" highlightedWords={['£0', '£100']}/>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {whyChooseUs.map((item, index) => (
            <WhyUsCard key={index} title={item.title} content={item.content} image={item.image} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default WhyUsSection;
