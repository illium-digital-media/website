import React from 'react';
import developmentProcess from '@/data/developmentprocess';
import FadeInText from '../FadeInTypingText';
import ProcessCard from '../ProcessCard';
const ProcessSection: React.FC = () => {
    return (
        <div className="max-w-3xl m-auto">
            <h2 className="text-4xl font-bold mb-6 text-center text-white"><FadeInText text='Our Process' /></h2>
            <div className="relative">
                {developmentProcess.map((step, index, arr) => (
                    <ProcessCard key={index} index={index} lastItem={index === arr.length - 1} title={step.title} description={step.description} />
                ))}
            </div>
        </div>
    );
}

export default ProcessSection;
