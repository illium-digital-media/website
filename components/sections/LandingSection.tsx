import ContactButton from "../CTAs/ContactButton";
import FadingText from "../FadeInTypingText";

const LandingSection: React.FC = () => {
  return (
    <section className="relative max-sm:px-4 pt-20 flex items-center max-xl:px-5 w-full max-sm:h-[450px] sm:h-[650px]">

      {/* Background pseudo-element */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      {/* Actual background image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-40" style={{ backgroundImage: `url("/digital.jpg")` }}></div>

      {/* Fade to black gradient at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent to-black z-0"></div>

      {/* Wrapper for content to maintain max-width */}
      <div className="max-w-screen-xl m-auto w-full z-0 flex">
        <div className="text-white sm:w-1/2">
          <h3 className="text-5xl font-bold max-lg:text-4xl">
            <FadingText text="Web Development Beyond the Ordinary" />
          </h3>
          <p className="py-4">
            <FadingText text="Crafting digital landscapes with a touch of the extraordinary. Ready for a unique journey online?" />
          </p>
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
