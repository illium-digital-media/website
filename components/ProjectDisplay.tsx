import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import RightUpArrowIcon from './Icons/RightUpArrow';
import { projects } from '@/data/projects';

interface ProjectDisplayProps {
    activeSite: string;
    setActiveSite: (id: string) => void;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ activeSite, setActiveSite }) => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        draggable: false, 
        arrows: false,  
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: projects.findIndex(project => project.id === activeSite),
        afterChange: (current: number) => setActiveSite(projects[current].id)
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(projects.findIndex(project => project.id === activeSite));
        }
    }, [activeSite]);

    return (
        <div className={`sm:w-1/2 bg-secondary rounded-lg flex items-center justify-center`}>
            <div className="w-full h-full rounded-md bg-gradient-to-r from-secondary to-cyan-400">
                <Slider ref={sliderRef} {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="w-full h-full rounded-md bg-gradient-to-r from-secondary to-cyan-400 p-0.5">
                            <div className="h-full w-full bg-gradient-to-r from-secondary via-tertiary to-secondary p-5 max-sm:p-3">
                                <div className="relative">
                                    <a aria-label="go to project website" href={project.url} target="_blank" className="absolute top-0 right-0 bg-transparent">
                                        <div className="text-orange-600 cursor-pointer hover:scale-110">
                                            <RightUpArrowIcon />
                                        </div>
                                    </a>
                                    <Image
                                        key={project.id}
                                        alt={project.name}
                                        src={project.imagePath}
                                        className="transition-opacity duration-500 max-sm:p-10 sm:p-10"
                                        priority={true}
                                    />
                                    <div className="text-white text-base">{project.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ProjectDisplay;
