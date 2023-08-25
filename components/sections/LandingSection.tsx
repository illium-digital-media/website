import ContactButton from "../CTAs/ContactButton";

const LandingSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl max-lg:max-w-screen-sm max-sm:px-4 m-auto pt-20 h-[600px] max-lg:h-[450px] flex items-center max-xl:px-5">
      <div className="text-white w-1/2">
        <h3 className="text-5xl font-bold max-lg:text-4xl">
          Web Development Beyond the Ordinary
        </h3>
        <p className="py-4">Crafting digital landscapes with a touch of the extraordinary. Ready for a unique journey online?</p>
        <ContactButton />
      </div>
    </section>
  );
};

export default LandingSection;
