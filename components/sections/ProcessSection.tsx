import React from 'react';
import developmentProcess from '@/data/developmentprocess';
import FadeInText from '../FadeInTypingText';
const ProcessSection: React.FC = () => {
    return (
        <div className="max-w-3xl m-auto">
            <h2 className="text-4xl font-bold mb-6 text-center text-white"><FadeInText text='Our Web Development Process' /></h2>
            <div className="relative">
                {developmentProcess.map((step, index, arr) => (
                    <div key={index} className="mb-12 last:mb-0 bg-tertiary rounded-lg relative">

                        <div className="flex items-center p-4 rounded-lg text-white shadow-md z-10">
                            <div className="mr-4 font-bold w-12 h-12 flex items-center justify-center font-bold">{index + 1}.</div>
                            <div className=''>
                                <p className='text-white font-bold'>{step.title}
                                </p>
                                <div className='text-gray-300'>{step.description}</div>
                            </div>

                        </div>

                        {/* Dashed Line */}
                        {index !== arr.length - 1 && (
                            <div className="h-[50px] w-0.5 mx-auto border-l-2 border-dashed border-cyan-500 mt-1 absolute left-1/2 top-[calc(100%-5px)] transform -translate-x-1/2 z-0"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>




    );
}

export default ProcessSection;
