import { ReactNode } from "react";
import { motion } from "framer-motion";
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll"; // Adjust the path to your hook's location

const IntroCard: React.FC<{ icon: ReactNode; name: string; comment: string }> = (props) => {
    const { isVisible, sectionRef } = useVisibilityOnScroll();

    return (
        <motion.div
            ref={sectionRef}
            className={`max-sm:w-80 max-sm:h-80 w-full sm:w-1/2 lg:w-1/4 mb-4 px-2`}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            <div className="text-center rounded-lg shadow-lg bg-secondary h-full">
                <div className="w-full h-full rounded-md bg-gradient-to-r from-secondary to-cyan-400 p-0.5">
                    <div className="h-full w-full bg-gradient-to-r from-secondary via-tertiary to-secondary px-5 py-5">
                        <div className="p-3 shadow-lg inline-block overflow-hidden mb-5 text-orange-400">
                            {props.icon}
                        </div>
                        <div className="w-full">
                            <h3 className="text-2xl font-semibold pb-2 text-white">{props.name}</h3>
                            <p className="pb-5 text-gray-300">{props.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default IntroCard;
