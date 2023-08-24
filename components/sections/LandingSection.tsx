import ContactButton from "../CTAs/ContactButton";

const LandingSection: React.FC = () => {
  return (
    <section
      className=" bg-cover bg-center max-sm:px-4 flex items-center justify-center h-[500px] max-lg:h-[450px]  max-xl:px-5"
      style={{
        backgroundImage: `url("/space-background.jpg")`,
      }}
    >
      <div className="max-w-screen-xl w-full text-white">
        <h3 className="text-white text-5xl font-bold max-lg:text-4xl">
          Small Business Web Design <br />
          &amp; Development
        </h3>
        <p className="py-4">
          No page builders or WordPress - We offer 100% hand-coded websites with
          superior results starting at $150/mo.
        </p>
        <ContactButton />
      </div>
    </section>
  );
};

export default LandingSection;
