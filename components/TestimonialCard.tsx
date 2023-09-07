import React from 'react';
import StarRating from './StarRating';
import useVisibilityOnScroll from '@/hooks/useVisibilityonScroll';
import { motion } from 'framer-motion';

const TestimonialCard: React.FC<{ comment: string; name: string; company: string; }> = (props) => {
  const { isVisible, sectionRef } = useVisibilityOnScroll();

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="max-lg:h-full flex-grow bg-gradient-to-r from-secondary to-cyan-400 p-0.5 rounded-lg flex-grow max-lg:w-11/12 lg:w-1/3 mx-3 rounded-lg mr-4"
    >
      <div className="h-full bg-gradient-to-r from-secondary via-tertiary to-secondary p-5">
        <StarRating rating={4} />
        <p className="py-3 text-gray-300">&quot;{props.comment}&quot;</p>
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-white">{props.name}</p>
            <p className="text-gray-300">{props.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
