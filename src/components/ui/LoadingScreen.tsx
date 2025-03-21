'use client'

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after all content is loaded
    const handleLoad = () => {
      if (loadingRef.current) {
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (loadingRef.current) {
              loadingRef.current.style.display = 'none';
            }
          }
        });
      }
      setIsLoading(false);
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div 
      ref={loadingRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-navy"
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-brand-lavender/30 rounded-full" />
          <div className="w-16 h-16 border-4 border-brand-lavender border-t-transparent rounded-full animate-spin absolute top-0 left-0" />
        </div>
        <p className="mt-6 text-brand-lavender font-medium text-lg">Loading</p>
      </div>
    </div>
  );
};

export default LoadingScreen; 