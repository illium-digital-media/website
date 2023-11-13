import React from 'react';
import developmentProcess from '@/data/developmentprocess';
import FadeInText from '../FadeInTypingText';
import TimelineStep from '../TimelineStep';

const TimelineSection: React.FC = () => {
    return (
        <div className="max-w-4xl max-lg:max-w-2xl m-auto sm:p-6">
            <h2 className="text-center font-bold text-white text-4xl max-sm:text-2xl pb-10 max-lg:pb-5">
                <FadeInText text="Our Process" highlightedWords={['Process']} />
                </h2>
                {developmentProcess.map((step, index, arr) => (
                    <TimelineStep phase={index + 1} key={index} step={step} isLast={index === arr.length - 1} />
                ))}
        </div>
    );
};



export default TimelineSection;
