import React, { useState } from 'react';
import Image from 'next/image';
import FadeInText from '../FadeInTypingText';
import { projects } from '@/data/projects';
import RightUpArrowIcon from '../Icons/RightUpArrow';
import ProjectSelector from '../ProjectSelector';
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";


const PortfolioSection: React.FC = () => {
    const [activeSite, setActiveSite] = useState<string>(projects[0].id);
    const { isVisible, sectionRef } = useVisibilityOnScroll();

    return (
        <div ref={sectionRef}>
            <h2 className="text-4xl font-bold text-center text-white pb-10"><FadeInText text='Our Latest Projects' /></h2>
            <div className="sm:flex">
                <div className={`max-sm:hidden w-1/2 flex items-center transition-transform duration-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='w-3/4'>
                        {projects.map((project) => (
                            <>
                                <div key={project.id} onClick={() => setActiveSite(project.id)}
                                    className={`p-4 hover:text-cyan-400 cursor-pointer ${activeSite === project.id ? 'font-bold text-cyan-400' : 'text-white'}`}
                                >
                                    {project.name}
                                </div>
                                <hr className="bg-gradient-to-l from-transparent via-cyan-400 to-transparent h-px border-none max-w-screen-lg m-auto" />
                            </>
                        ))}
                    </div>
                </div>
                <div className={`sm:w-1/2 bg-secondary rounded-lg flex items-center justify-center transition-transform duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="w-full h-full rounded-md bg-gradient-to-r from-secondary to-cyan-400">
                        {projects.map((project) => (
                            activeSite === project.id &&
                            <div className="w-full h-full rounded-md bg-gradient-to-r from-secondary to-cyan-400 p-0.5">
                                <div className="h-full w-full bg-gradient-to-r from-secondary via-tertiary to-secondary p-5 max-sm:p-3">
                                    <div className="relative">
                                        <a href={project.url} target="_blank" className="absolute top-0 right-0  bg-transparent">
                                            <div className="text-orange-400 cursor-pointer hover:scale-110">
                                                <RightUpArrowIcon />
                                            </div>
                                        </a>

                                        <Image
                                            key={project.id}
                                            alt={project.name}
                                            src={project.imagePath}
                                            className="transition-opacity duration-500 max-sm:p-10 sm:p-20"
                                        />

                                        <div className="text-white">{project.name}</div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
                <div className='sm:hidden'>
                    <ProjectSelector activeSite={activeSite} setActiveSite={setActiveSite} />
                </div>
            </div>
        </div>


    );
};

export default PortfolioSection;


