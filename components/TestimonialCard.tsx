import React from 'react';
import StarRating from './StarRating';
import useVisibilityOnScroll from '@/hooks/useVisibilityonScroll';
import { motion } from 'framer-motion';

const TestimonialCard: React.FC<{ comment: string; name: string; company: string; }> = (props) => {
  const { isVisible, sectionRef } = useVisibilityOnScroll();

  return (
    <div className={`max-sm:w-80 h-auto mx-3 rounded-lg mb-4`} ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-secondary to-cyan-400 p-0.5 rounded-lg"
      >
        <div className="h-full bg-gradient-to-r from-secondary via-tertiary to-secondary">
          <div className="p-5">
            <StarRating rating={4} />
            <p className="py-3 text-gray-300">&quot;{props.comment}&quot;</p>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-white">{props.name}</p>
                <p className="text-gray-300">{props.company}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TestimonialCard;
