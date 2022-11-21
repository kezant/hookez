import React, { RefObject } from 'react';

/**
 * Check if an HTML Element is currently appearing on the screen
 *
 * @param {RefObject<HTMLElement>} ref The reference of the element to observe
 * @returns {boolean} True when the element is visible on screen
 */
export const useOnScreen = (ref: RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  const observer = React.useMemo(() => {
    return new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
  }, []);

  React.useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
};
