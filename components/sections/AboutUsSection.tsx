

import Image from 'next/image';
import dualScreen from '../../assets/dual.png';
import FadeInText from '../FadeInTypingText';
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";

const AboutUsSection: React.FC = () => {
  const { isVisible, sectionRef } = useVisibilityOnScroll();

  return (
    <div className="overflow-x-hidden">
      <div ref={sectionRef}>
        <div className="lg:flex items-center">
          <div
            className={`lg:w-1/2 rounded-lg lg:pr-20 transform transition-transform duration-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <Image alt="web-design" src={dualScreen} />
          </div>
          <div
            className={`max-w-5xl m-auto lg:w-1/2 transform transition-transform duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <h4 className="font-bold max-lg:text-center text-4xl text-white pb-5">
              <FadeInText text="Helping Small Businesses Thrive, One Website at a Time" />
            </h4>
            <p className="pb-5 text-gray-300">
              Hey there, I&apos;m Clay. The heart, soul, and coding brain behind Illium Digital Media. You know, it&apos;s funny – even as I immersed myself in the intricate world of computer science during my Master&apos;s, I had never actually built a website from scratch.
            </p>
            <p className="pb-5 text-gray-300">
              That changed on a seemingly ordinary day at my dining table. A family friend mentioned their dream of having a website. On a whim, and perhaps a bit of overconfidence, I decided to give it a shot. The challenge was real, and the learning curve steep, but the thrill of crafting something new and witnessing it come alive on screen was unlike anything I&apos;d felt before. It wasn&apos;t just code and pixels; it was a story, a dream, a vision, taking form.
            </p>
            <p className="pb-5 text-gray-300">
              However, my euphoria was tempered when I discovered a hard truth. The cost of creating such digital dreams was often out of reach for small businesses. It didn&apos;t sit right with me. With a fresh perspective and a passion ignited, I set out on a mission: to make quality web presence accessible to all.
            </p>
            <p className="text-gray-300">
              And that&apos;s how I came up with my unique offering: £0 upfront and just £50 per month. It&apos;s not merely a pricing model; it&apos;s my commitment to you. I want to ensure that every business, no matter the size, can have its own digital narrative without the heavy financial weight. At Illium Digital Media, we&apos;re crafting digital tales together, ensuring each one shines bright.
            </p>      </div>
        </div>
      </div>
    </div>

  );
};

export default AboutUsSection;
