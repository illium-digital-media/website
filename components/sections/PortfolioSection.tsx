import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import FadeInText from '../FadeInTypingText';
import RightUpArrowIcon from '../Icons/RightUpArrow';
import ProjectSelector from '../ProjectSelector';
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

const PortfolioSection: React.FC = () => {
    const [activeSite, setActiveSite] = useState<string>(projects[0].id);
    const [activeImage, setActiveImage] = useState<StaticImageData>(projects[0].imagePath);
    const { isVisible, sectionRef } = useVisibilityOnScroll();

    useEffect(() => {
        const selectedProject = projects.find((project) => project.id === activeSite);
        if (selectedProject) {
            setActiveImage(selectedProject.imagePath);
        }
    }, [activeSite]);

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <div className="overflow-x-hidden">
            <div ref={sectionRef}>
                <h2 className="text-4xl font-bold text-center text-white pb-10"><FadeInText text='Our Latest Projects' /></h2>
                <div className="sm:flex">
                    <div className={`max-sm:hidden w-1/2 flex items-center transition-transform duration-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className='w-3/4'>
                            {projects.map((project) => (
                                <div key={project.id}>
                                    <div onClick={() => setActiveSite(project.id)}
                                        className={`p-4 hover:text-cyan-400 cursor-pointer ${activeSite === project.id ? 'font-bold text-cyan-400' : 'text-white'}`}
                                    >
                                        {project.name}
                                    </div>
                                    <hr className="bg-gradient-to-l from-transparent via-cyan-400 to-transparent h-px border-none max-w-screen-lg m-auto" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`sm:w-1/2 bg-secondary rounded-lg flex items-center justify-center transition-transform duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="w-full h-full rounded-md bg-gradient-to-r from-secondary to-cyan-400">
                            {projects.map((project, index) => (
                                activeSite === project.id &&
                                <motion.div 
                                    key={index}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={imageVariants}
                                    transition={{ duration: 0.9 }}
                                    className="w-full h-full rounded-md bg-gradient-to-r from-secondary to-cyan-400 p-0.5"
                                >
                                    <div className="h-full w-full bg-gradient-to-r from-secondary via-tertiary to-secondary p-5 max-sm:p-3">
                                        <div className="relative">
                                            <a href={project.url} target="_blank" className="absolute top-0 right-0  bg-transparent">
                                                <div className="text-orange-600 cursor-pointer hover:scale-110">
                                                    <RightUpArrowIcon />
                                                </div>
                                            </a>
                                            <Image
                                                key={project.id}
                                                alt={project.name}
                                                src={activeImage}
                                                className="transition-opacity duration-500 max-sm:p-10 sm:p-20"
                                            />
                                            <div className="text-white">{project.name}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className='sm:hidden'>
                        <ProjectSelector activeSite={activeSite} setActiveSite={setActiveSite} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
