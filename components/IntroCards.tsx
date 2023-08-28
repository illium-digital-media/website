import { introCards } from "../data/introcards";
import IntroCard from "./IntroCard";

const IntroCards = () => {
  return (
    <div className="flex flex-wrap justify-between sm:px-5">
      {introCards.map((intro, index) => (
        <IntroCard key={index} name={intro.name} comment={intro.comment} icon={intro.icon} />
      ))}
    </div>
  );
};

export default IntroCards;
