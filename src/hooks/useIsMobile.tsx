import { useEffect, useState } from 'react';

const useIsMobile = (size = 767) => {
  const isMobileView = () => {
    if (typeof window == 'undefined') {
      return false;
    } else {
      return window.innerWidth <= size;
    }
  };

  const [isMobile, setIsMobile] = useState(isMobileView());

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(isMobileView());

    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
