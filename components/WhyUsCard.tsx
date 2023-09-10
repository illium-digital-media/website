import React from "react";
import { motion } from "framer-motion";
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";

const WhyUsCard: React.FC<{ title: string; content: string; image: any }> = (props) => {
    const { isVisible, sectionRef } = useVisibilityOnScroll();

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`sm:mx-1 max-sm:mb-3 rounded-lg mb-2 flex`}
        >
            <div className="flex items-center text-base">
                <div className={`mr-5 text-orange-600`}>{props.image}</div>
                <div>
                    <h3 className="text-1xl font-bold pb-2">{props.title}</h3>
                    <p className="text-gray-400">{props.content}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default WhyUsCard;
