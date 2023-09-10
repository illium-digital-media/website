import React, { useEffect, useState, useRef } from 'react';

interface Props {
  text: string;
  initialDelay?: number;
  characterDelay?: number;
  highlightedWords?: string[];
}


const FadeInText: React.FC<Props> = ({
  text,
  initialDelay = 30,
  characterDelay = 15,
  highlightedWords = [],
}) => {
  const [visibleChars, setVisibleChars] = useState<number[]>([]);
  const containerRef = useRef(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        startAnimation();
        if (observer) observer.disconnect();
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
      root: null,
      threshold: 0.1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [text, initialDelay, characterDelay]);

  const shouldHighlightChar = (char: string, index: number) => {
    if (!highlightedWords || highlightedWords.length === 0) {
      return false;
    }
  
    return highlightedWords.some(word => {
      const startIndex = text.indexOf(word);
      const endIndex = startIndex + word.length - 1;
  
      return index >= startIndex && index <= endIndex;
    });
  };
  
  

  return (
    <span ref={containerRef}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`transition-opacity duration-300 ${
            visibleChars.includes(index) ? 'opacity-100' : 'opacity-0'
          } ${shouldHighlightChar(char, index) ? 'text-cyan-400' : ''}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
  
};

export default FadeInText;
