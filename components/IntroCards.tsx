import { introCards } from "../data/introcards";

const IntroCards = () => {
  return (
    <div className="justify-between max-md:flex-wrap sm:flex sm:px-5">
      {introCards.map((intro, index) => (
        <div
          key={index}
          className={`sm:mx-2 w-1/4 max-md:w-full max-sm:mb-3 text-center rounded-lg mb-4 shadow-lg bg-secondary`}
        >
          <div className="w-full h-full rounded-md bg-gradient-to-r from-secondary to-cyan-400 p-0.5">
            <div className="h-full w-full  bg-gradient-to-r from-secondary via-tertiary to-secondary px-5 py-5">
              <div className="p-3 shadow-lg inline-block overflow-hidden mb-5 text-orange-400">
                {intro.icon}
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-semibold pb-2 text-white">{intro.name}</h3>
                <p className="pb-5 text-gray-300">{intro.comment}</p>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default IntroCards;
