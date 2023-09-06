import React from 'react';
import developmentProcess from '@/data/developmentprocess';
import FadeInText from '../FadeInTypingText';
import TimelineStep from '../TimelineStep';

const TimelineSection: React.FC = () => {
    return (
        <div className="max-w-4xl max-lg:max-w-2xl m-auto p-6">
            <h2 className="text-center font-bold text-white text-4xl max-sm:text-2xl pb-10 max-lg:pb-5"><FadeInText text="Our Process" /></h2>
            <div className="relative">
                {developmentProcess.map((step, index, arr) => (
                    <TimelineStep phase={index + 1} key={index} step={step} isLast={index === arr.length - 1} />
                ))}
            </div>
        </div>
    );
};



export default TimelineSection;
