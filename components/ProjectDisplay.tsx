import Image from 'next/image';
import RightUpArrowIcon from './Icons/RightUpArrow';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

interface ProjectDisplayProps {
    activeSite: string;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ activeSite }) => {
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <div className={`sm:w-1/2 bg-secondary rounded-lg flex items-center justify-center`}>
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
                                <a aria-label="go to project website" href={project.url} target="_blank" className="absolute top-0 right-0  bg-transparent">
                                    <div className="text-orange-600 cursor-pointer hover:scale-110">
                                        <RightUpArrowIcon />
                                    </div>
                                </a>
                                {/* <link rel="preload" href={project.imagePath.src} as="image" />
                                <img src={project.imagePath.src} alt="test" /> */}
                                <Image
                                    key={project.id}
                                    alt={project.name}
                                    src={project.imagePath}
                                    className="transition-opacity duration-500 max-sm:p-10 sm:p-20"
                                    loading="eager"
                                />
                                <div className="text-white">{project.name}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default ProjectDisplay;
