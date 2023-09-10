import React, { useState } from 'react';
import FadeInText from '../FadeInTypingText';
import ProjectSelector from '../ProjectSelector';
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";
import { projects } from '@/data/projects';
import ProjectDisplay from '../ProjectDisplay';
import { motion } from 'framer-motion';

const ProjectList: React.FC<{ activeSite: string; setActiveSite: (id: string) => void }> = ({ activeSite, setActiveSite }) => {
    const { isVisible, sectionRef } = useVisibilityOnScroll();

    return (
        <motion.div
            ref={sectionRef}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`max-sm:hidden w-1/2 flex items-center`}
        >
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

        </motion.div>
    );
};

const PortfolioSection: React.FC = () => {
    const [activeSite, setActiveSite] = useState<string>(projects[0].id);
    const { isVisible: headingVisible, sectionRef: headingRef } = useVisibilityOnScroll();

    return (
        <div className="overflow-x-hidden">
            <motion.h2
                ref={headingRef}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: headingVisible ? 0 : 100, opacity: headingVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl max-sm:text-2xl font-bold text-center text-white pb-10"
            >
                <FadeInText text='Our Latest Projects' highlightedWords={['Our']}/>
            </motion.h2>
            <div className="sm:flex">
                <ProjectList activeSite={activeSite} setActiveSite={setActiveSite} />
                <ProjectDisplay activeSite={activeSite} setActiveSite={setActiveSite} />
                <ProjectSelector activeSite={activeSite} setActiveSite={setActiveSite} />
            </div>
        </div>
    );
};

export default PortfolioSection;
