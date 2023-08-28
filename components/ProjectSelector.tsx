import { projects } from "@/data/projects";
import RightArrowIcon from "./Icons/RightArrow";
import LeftArrowIcon from "./Icons/LeftArrow";

const ProjectSelector: React.FC<{ activeSite: string; setActiveSite: (id: string) => void }> = ({ activeSite, setActiveSite }) => {
    const nextProject = () => {
        const currentIndex = projects.findIndex(p => p.id === activeSite);
        if (currentIndex < projects.length - 1) {
            setActiveSite(projects[currentIndex + 1].id);
        }
    };

    const prevProject = () => {
        const currentIndex = projects.findIndex(p => p.id === activeSite);
        if (currentIndex > 0) {
            setActiveSite(projects[currentIndex - 1].id);
        }
    };

    return (
        <div className="pt-5 text-white font-bold flex justify-between items-center">
            <button onClick={prevProject} className="text-gray-500"><LeftArrowIcon/></button>
            <div>{projects.find(p => p.id === activeSite)?.name}</div>
            <button onClick={nextProject} className="text-gray-500"><RightArrowIcon/></button>
        </div>
    );
};

export default ProjectSelector;