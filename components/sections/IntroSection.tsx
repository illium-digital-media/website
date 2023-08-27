import IntroCards from "../IntroCards";

const IntroSection: React.FC = () => {
  return (
    <div className="relative pt-20">
      <div className="text-center pb-6 z-10">
        <h4 className="font-bold text-white text-4xl pb-2">What We Do</h4>
      </div>
      <IntroCards />
    </div>
  );
};

export default IntroSection;
