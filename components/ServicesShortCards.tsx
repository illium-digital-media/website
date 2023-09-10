import { servicesShort } from "@/data/servicesshort";
import ServiceCard from "./ServiceCard";

const ServicesShortCards = () => {
  return (
    <div className="max-sm:hidden grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
      {servicesShort.map((intro, index) => (
          <ServiceCard key={index} name={intro.name} comment={intro.comment} icon={intro.icon} />
      ))}
    </div>
  );
};

export default ServicesShortCards;

