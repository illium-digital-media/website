import FadeInText from "../FadeInTypingText";
import { whyChooseUs } from "../../data/whychooseus";
import WhyUsCard from "../WhyUsCard";

const WhyUsSection: React.FC = () => {

  return (
    <div className="lg:flex text-white">
      <div className="max-lg:w-full max-lg:px-5">
        <div className="pb-6 text-center">
          <h2 className="font-bold text-4xl pb-2">
            <FadeInText text="Transparent Pricing, Tangible Results"/>
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {whyChooseUs.map((item, index) => (
            <WhyUsCard key={index} title={item.title} content={item.content} image={item.image} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default WhyUsSection;
