// hooks/useSticky.ts
import { useEffect, useState, useRef, RefObject } from 'react';

export const useSticky = (
  options?: IntersectionObserverInit
): [RefObject<HTMLDivElement | null>, boolean] => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1, ...options }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [options]);

  return [elementRef, isSticky];
};
