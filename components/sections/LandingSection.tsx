import ContactButton from "../CTAs/ContactButton";

const LandingSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl max-lg:max-w-screen-sm max-sm:px-4 m-auto pt-20 h-[500px] max-lg:h-[450px] flex items-center max-xl:px-5">
      <div className="">
        <h3 className="text-blue-900 text-5xl font-bold max-lg:text-4xl">
          Your local London <br />
          Painters &amp; Decorators
        </h3>
        <p className="py-4">Professional Painters and Decorators in London.</p>
        <ContactButton />
      </div>
    </section>
  );
};

export default LandingSection;
