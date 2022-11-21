import React, { RefObject } from 'react';

/**
 * Check if an HTML Element has been found on the screen
 * @param {RefObject<HTMLElement>} ref The reference of the element to observe
 * @returns {boolean} True when the element is found for the first time
 */
export function useOnFound(ref: RefObject<HTMLElement>): boolean {
  const [isIntersecting, setIntersecting] = React.useState(false);
  const [isFound, setFound] = React.useState(false);

  const observer = React.useMemo(() => {
    return new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);

      if (isIntersecting || isFound || entry.isIntersecting) {
        setFound(true);
      }
    });
  }, []);

  React.useEffect(() => {
    ref.current && observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return isFound;
}
