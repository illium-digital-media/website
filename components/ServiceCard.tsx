import { ReactNode } from "react";
import { motion } from "framer-motion";
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll"; // Adjust the path to your hook's location

const ServiceCard: React.FC<{ icon: ReactNode; name: string; comment: string }> = (props) => {
  const { isVisible, sectionRef } = useVisibilityOnScroll();

  return (
    <motion.div
      ref={sectionRef}
      className={`text-center max-lg:h-full bg-gradient-to-r from-secondary to-cyan-400 p-0.5 rounded-lg flex-grow mx-2 rounded-lg mr-4`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full w-full bg-gradient-to-r from-secondary via-tertiary to-secondary p-5">
        <div className="p-2 inline-block overflow-hidden mb-3 text-orange-600">
          {props.icon}
        </div>
        <div className="w-full">
          <h3 className="text-2xl max-sm:text-xl font-semibold pb-2 text-white">{props.name}</h3>
          <p className="pb-5 text-gray-300">{props.comment}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;