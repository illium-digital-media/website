// hooks/useLoadGAOnUserInteraction.ts
import { useEffect, useState } from 'react';
import Script from 'next/script';

const useLoadGAOnUserInteraction = () => {
  const [loadGA, setLoadGA] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      setLoadGA(true);
      cleanup();
    };

    const timerId = setTimeout(handleUserInteraction, 4000);

    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true });
    document.addEventListener('mousemove', handleUserInteraction, { once: true });

    const cleanup = () => {
      clearTimeout(timerId);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('mousemove', handleUserInteraction);
    };

    return cleanup;
  }, []);

  return loadGA ;
};

export default useLoadGAOnUserInteraction;
