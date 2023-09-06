import { motion } from "framer-motion";
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";

type TimelineStepProps = {
    step: {
        title: string;
        description: string;
        keywords: string[]
    };
    isLast: boolean;
    phase: number;
};

const TimelineStep: React.FC<TimelineStepProps> = ({ phase, step, isLast }) => {
    const { isVisible, sectionRef } = useVisibilityOnScroll();

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`relative group ${!isLast ? 'pb-8 ' : ''} transition duration-300`}
        >
            <div className="relative flex items-start space-x-5">
                <div className="relative z-10">
                    <span className="block h-8 w-8 rounded-full group-hover:shadow-cyan-glow bg-tertiary flex items-center justify-center">
                        <span className="h-3 w-3 rounded-full duration-500 group-hover:bg-cyan-400" />
                    </span>
                </div>
                <div className={`lg:flex justify-between py-0 ${!isLast ? 'border-b border-cyan-950 pb-5' : ''}`}>
                    <div className="text-white font-semibold text-lg w-1/4 whitespace-nowrap w-1/2 pb-3">{phase + '. ' + step.title}</div>

                    <div className="text-gray-400 lg:w-2/3">
                        <div className="mb-4">
                            {step.keywords.map((keyword, kIndex) => (
                                <span key={kIndex} className="inline-block mr-4 px-4 py-2 bg-tertiary group-hover:bg-gradient-to-t group-hover:from-orange-800 group-hover:via-orange-700 group-hover:to-orange-800 group-hover:text-orange-100 duration-1000 text-gray-300 rounded-full">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                        <p>{step.description}</p>
                    </div>
                </div>

            </div>

            {!isLast && <div className={`absolute top-4 left-4 -ml-px h-full w-0.5 bg-cyan-950`} />}
        </motion.div>

    );
};

export default TimelineStep;