import { projects } from "@/data/projects";
import RightArrowIcon from "./Icons/RightArrow";
import LeftArrowIcon from "./Icons/LeftArrow";
import { motion } from 'framer-motion';
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";

const ProjectSelector: React.FC<{ activeSite: string; setActiveSite: (id: string) => void }> = ({ activeSite, setActiveSite }) => {
    const { isVisible, sectionRef } = useVisibilityOnScroll();

    const currentIndex = projects.findIndex(p => p.id === activeSite);

    const nextProject = () => {
        if (currentIndex < projects.length - 1) {
            setActiveSite(projects[currentIndex + 1].id);
        }
    };

    const prevProject = () => {
        if (currentIndex > 0) {
            setActiveSite(projects[currentIndex - 1].id);
        }
    };

    return (
        <div className='sm:hidden'>
            <motion.div
                ref={sectionRef}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`pt-5 text-white font-bold flex justify-between items-center`}
            >

                <button
                    aria-label="go to previous project"
                    onClick={prevProject}
                    className={currentIndex === 0 ? "opacity-0 cursor-default" : "text-gray-400 cursor-pointer"}
                >
                    <LeftArrowIcon />
                </button>
                <div>{projects.find(p => p.id === activeSite)?.name}</div>
                <button
                    aria-label="go to next project"
                    onClick={nextProject}
                    className={currentIndex === projects.length - 1 ? "opacity-0 cursor-default" : "text-gray-400 cursor-pointer"}
                    disabled={currentIndex === projects.length - 1}
                >
                    <RightArrowIcon />
                </button>
            </motion.div>

        </div>

    );
};

export default ProjectSelector;
