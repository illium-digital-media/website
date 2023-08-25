import { introCards } from "./data/introcards";

const IntroCards = () => {
  return (
    <div className="justify-between max-md:flex-wrap sm:flex sm:px-5">
      {introCards.map((intro, index) => (
        <div
          key={index}
          className={`sm:mx-1 px-5 py-5 w-1/4 max-md:w-full max-sm:py-10 max-sm:mb-3 text-center border border-cyan-400 rounded-lg mb-4 shadow-lg bg-secondary`}
        >
          <div className="p-3 shadow-lg inline-block overflow-hidden mb-5 text-cyan-400">
            {intro.icon}
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-semibold pb-2 text-white">{intro.name}</h3>
            <p className="pb-5 text-white">{intro.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntroCards;
