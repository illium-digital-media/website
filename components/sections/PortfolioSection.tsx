import React, { useState } from 'react';

import Image from 'next/image';
import FadeInText from '../FadeInTypingText';
import { projects } from '@/data/projects';
import RightUpArrowIcon from '../Icons/RightUpArrow';

const PortfolioSection: React.FC = () => {
    const [activeSite, setActiveSite] = useState<string>(projects[0].id);

    return (
        <>
            <h2 className="text-4xl font-bold mb-6 text-center text-white pb-10"><FadeInText text='Our Latest Projects' /></h2>
            <div className="flex">
                <div className="w-1/2 flex items-center ">
                    <div className='w-full'>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setActiveSite(project.id)}
                                className={`p-4 w-3/4 hover:text-cyan-400 cursor-pointer border-b border-cyan-400 ${activeSite === project.id ? 'font-bold text-cyan-400' : 'text-white'}`}
                            >
                                {project.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-1/2 bg-secondary border border-cyan-400 rounded-lg flex items-center justify-center">
                    {projects.map((project) => (
                        activeSite === project.id &&
                        <div className="relative">
                            <a href={project.url} className="absolute top-4 right-4">
                                <div className="text-white hover:text-cyan-400 cursor-pointer">
                                    <RightUpArrowIcon />
                                </div>
                            </a>

                            <Image
                                key={project.id}
                                alt={project.name}
                                src={project.imagePath}
                                className="transition-opacity duration-500 p-20"
                            />

                            <div className="text-white px-5 pb-5">{project.name}</div>
                        </div>
                    ))}
                </div>

            </div>
        </>

    );
};

export default PortfolioSection;
