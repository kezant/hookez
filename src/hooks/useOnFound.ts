'use client';
import React, { RefObject } from 'react';

/**
 * Check if an HTML Element has been found on the screen
 *
 * @param {RefObject<HTMLElement>} ref The reference of the element to observe
 * @returns {boolean} True when the element is found for the first time
 */
export const useOnFound = (ref: RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = React.useState(false);
  const [isFound, setFound] = React.useState(false);

  const observer = React.useMemo(() => {
    return typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);

          if (isIntersecting || isFound || entry.isIntersecting) {
            setFound(true);
          }
        })
      : null;
  }, []);

  React.useEffect(() => {
    if (ref.current) observer?.observe(ref.current);
    return () => {
      observer?.disconnect();
    };
  }, [observer, ref]);

  return isFound;
};
