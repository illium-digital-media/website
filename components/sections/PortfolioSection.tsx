import React, { useState, useEffect, useMemo } from 'react';
import { StaticImageData } from 'next/image';
import FadeInText from '../FadeInTypingText';
import ProjectSelector from '../ProjectSelector';
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";
import { projects } from '@/data/projects';
import ProjectDisplay from '../ProjectDisplay';

const ProjectList: React.FC<{ activeSite: string; setActiveSite: (id: string) => void }> = ({ activeSite, setActiveSite }) => {
    return (
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
    );
};

const PortfolioSection: React.FC = () => {
    const [activeSite, setActiveSite] = useState<string>(projects[0].id);
    const { isVisible, sectionRef } = useVisibilityOnScroll();

    return (
        <div className="overflow-x-hidden">
            <div ref={sectionRef}>
                <h2 className="text-4xl font-bold text-center text-white pb-10"><FadeInText text='Our Latest Projects' /></h2>
                <div className="sm:flex">
                    <div className={`max-sm:hidden w-1/2 flex items-center transition-transform duration-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                        <ProjectList activeSite={activeSite} setActiveSite={setActiveSite} />
                    </div>
                    <ProjectDisplay activeSite={activeSite} setActiveSite={setActiveSite}/>
                    <div className='sm:hidden'>
                        <ProjectSelector activeSite={activeSite} setActiveSite={setActiveSite} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
