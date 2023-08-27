import React, { useEffect, useState, useRef } from 'react';

interface Props {
  text: string;
  initialDelay?: number;
  characterDelay?: number;
}

const FadeInText: React.FC<Props> = ({
  text,
  initialDelay = 30,
  characterDelay = 15,
}) => {
  const [visibleChars, setVisibleChars] = useState<number[]>([]);
  const containerRef = useRef(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        startAnimation();
        if (observer) observer.disconnect(); // Stop observing once it's intersected
      }
    };

    const startAnimation = () => {
      const chars = Array.from({ length: text.length }, (_, i) => i);
      const shuffledChars = chars.sort(() => 0.5 - Math.random());
      let delay = initialDelay;

      shuffledChars.forEach((index) => {
        setTimeout(() => {
          setVisibleChars((prev) => [...prev, index]);
        }, delay);
        delay += characterDelay;
      });
    };

    observer = new IntersectionObserver(handleIntersection, {
      root: null, // observing intersections with the viewport
      threshold: 0.1, // the callback will run when at least 10% of the target is visible
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [text, initialDelay, characterDelay]);

  return (
    <span ref={containerRef}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`transition-opacity duration-300 ${
            visibleChars.includes(index) ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default FadeInText;
