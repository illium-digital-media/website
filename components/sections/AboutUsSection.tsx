import Image from 'next/image';
import dualScreen from '../../assets/dual.png';
import FadeInText from '../FadeInTypingText';
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";
import { motion } from 'framer-motion';

const AboutUsSection: React.FC = () => {
  const { isVisible: isImageVisible, sectionRef: imageRef } = useVisibilityOnScroll();
  const { isVisible: isContentVisible, sectionRef: contentRef } = useVisibilityOnScroll();
  const { isVisible: isTextVisible, sectionRef: textRef } = useVisibilityOnScroll();

  return (
    <div className="overflow-x-hidden">
      <div>
        <div className="lg:flex items-center">
          <motion.div
            ref={imageRef}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isImageVisible ? 0 : -100, opacity: isImageVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`lg:w-1/2 max-lg:flex max-lg:justify-center rounded-lg lg:pr-20`}
          >
            <Image alt="web-design" src={dualScreen} />
          </motion.div>
          <div className='lg:w-1/2'>
            <motion.h2
              ref={textRef}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: isTextVisible ? 0 : 100, opacity: isTextVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold max-lg:text-center text-4xl max-sm:text-2xl text-white pb-5"
            >
              <FadeInText text="Helping Small Businesses Thrive, One Website at a Time" />
            </motion.h2>
            <motion.div
              ref={contentRef}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: isContentVisible ? 0 : 100, opacity: isContentVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={``}
            >

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
                And that&apos;s how I came up with my unique offering: £0 upfront and just £100 per month. It&apos;s not merely a pricing model; it&apos;s my commitment to you. I want to ensure that every business, no matter the size, can have its own digital narrative without the heavy financial weight. At Illium Digital Media, we&apos;re crafting digital tales together, ensuring each one shines bright.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
