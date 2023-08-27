import Image from "next/image";
import dualScreen from '../../assets/dual.png';
import FadeInText from "../FadeInTypingText";

const AboutUsSection: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="max-sm:hidden w-1/2 rounded-lg pr-20">
        <Image alt="web-design" src={dualScreen} />
      </div>
      <div className="max-w-5xl m-auto w-1/2">
        <h4 className="font-bold text-4xl text-white pb-5">
          <FadeInText text="Helping Small Businesses Thrive, One Website at a Time" />
          </h4>
        <p className="pb-5 text-gray-300">
          Hey there, I'm Clay. The heart, soul, and coding brain behind Illium Digital Media. You know, it's funny – even as I immersed myself in the intricate world of computer science during my Master's, I had never actually built a website from scratch.
        </p>
        <p className="pb-5 text-gray-300">
          That changed on a seemingly ordinary day at my dining table. A family friend mentioned their dream of having a website. On a whim, and perhaps a bit of overconfidence, I decided to give it a shot. The challenge was real, and the learning curve steep, but the thrill of crafting something new and witnessing it come alive on screen was unlike anything I'd felt before. It wasn't just code and pixels; it was a story, a dream, a vision, taking form.
        </p>
        <p className="pb-5 text-gray-300">
          However, my euphoria was tempered when I discovered a hard truth. The cost of creating such digital dreams was often out of reach for small businesses. It didn't sit right with me. With a fresh perspective and a passion ignited, I set out on a mission: to make quality web presence accessible to all.
        </p>
        <p className="text-gray-300">
          And that's how I came up with my unique offering: £0 upfront and just £50 per month. It's not merely a pricing model; it's my commitment to you. I want to ensure that every business, no matter the size, can have its own digital narrative without the heavy financial weight. At Illium Digital Media, we're crafting digital tales together, ensuring each one shines bright.
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
