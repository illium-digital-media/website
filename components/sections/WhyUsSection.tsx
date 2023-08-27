import FadeInText from "../FadeInTypingText";
import { whyChooseUs } from "../../data/whychooseus";

const WhyUsSection: React.FC = () => {

  return (
    <div className="lg:flex text-white">
      <div className="max-lg:w-full max-lg:px-5">
        <div className="pb-6 text-center">
          <h4 className="font-bold text-4xl pb-2">
            <FadeInText text="Transparent Pricing, Tangible Results"/>
          </h4>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className={`sm:mx-1 max-sm:mb-3 rounded-lg mb-2 flex`}
            >
              <div className="flex">
                <div className={`mr-5 text-orange-400`}>{item.image}</div>
                <div>
                  <h3 className="text-1xl font-bold pb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WhyUsSection;
