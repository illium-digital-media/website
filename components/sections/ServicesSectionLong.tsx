import React, { useState, useEffect } from "react";
import { services } from "@/data/services";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSectionLong = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [activeImage, setActiveImage] = useState<StaticImageData>(services[activeTab].image);

    useEffect(() => {
        setActiveImage(services[activeTab].image);
    }, [activeTab]);

    return (
        <div className="">
            <div className="sm:flex justify-center pb-6">
                {services.map((service, index) => (

                    <button
                        key={index}
                        className={`max-sm:w-full max-sm:mb-3 sm:mx-3 px-4 py-2 rounded-lg ${activeTab === index
                            ? "bg-gradient-to-t from-orange-800 via-orange-700 to-orange-800 text-orange-100"
                            : "hover:bg-gradient-to-t hover:from-orange-800 hover:via-orange-700 hover:to-orange-800 hover:text-orange-100 bg-tertiary text-gray-300 hover:shadow-cyan-glow"
                            } transition-colors duration-200`}
                        onClick={() => setActiveTab(index)}
                    >
                        {service.name}
                    </button>
                ))}
            </div>
            <div className="bg-secondary rounded-lg bg-gradient-to-r from-secondary to-cyan-400 p-0.5">
                <div className="h-full w-full bg-gradient-to-r from-secondary via-tertiary to-secondary px-5 py-5">
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="pb-6 text-center font-bold text-4xl pb-2 text-white">{services[activeTab].name}</div>
                            <div className="flex justify-center">
                                <Image src={activeImage} alt={services[activeTab].name} className="h-72 w-96 max-lg:w-56 max-lg:h-32" />
                            </div>
                            {services[activeTab].content.map((contentItem, contentIndex) => (
                                <div key={contentIndex} className="mb-6">
                                    <h3 className="text-white text-2xl mb-4 font-bold">{contentItem.heading}</h3>
                                    <p className="text-gray-300 mb-4">{contentItem.paragraph}</p>
                                    {contentItem.bulletPoints && (
                                        <ul className="list-disc pl-5 text-white">
                                            {contentItem.bulletPoints.map((point, pointIndex) => (
                                                <li key={pointIndex}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default ServicesSectionLong;
