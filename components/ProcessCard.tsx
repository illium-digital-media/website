import React from "react";
import { motion } from "framer-motion";
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";

const ProcessCard: React.FC<{ index: number; lastItem: boolean; title: string; description: string; }> = (props) => {
    const { isVisible, sectionRef } = useVisibilityOnScroll();

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full h-full rounded-md bg-gradient-to-r from-secondary to-cyan-400 p-0.5 mb-12 last:mb-0"
        >
            <div className="h-full w-full bg-gradient-to-r from-secondary via-tertiary to-secondary">
                <div className="rounded-lg relative">
                    <div className="flex items-center p-4 rounded-lg text-white shadow-md z-10">
                        <div className="mr-4 font-bold w-12 h-12 flex items-center justify-center font-bold">{props.index + 1}.</div>
                        <div className=''>
                            <p className='text-white font-bold'>{props.title}
                            </p>
                            <div className='text-gray-300'>{props.description}</div>
                        </div>
                    </div>

                    {!props.lastItem && (
                        <div className="h-[50px] w-0.5 mx-auto border-l-2 border-dashed border-cyan-500 mt-1 absolute left-1/2 top-[calc(100%-5px)] transform -translate-x-1/2 z-0"></div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProcessCard;
