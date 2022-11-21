import React, { useEffect } from 'react';

/**
 * Easily get the inner width and height of the window.
 *
 * @returns {WindowSizes} An object with the window's (inner) width and height
 */
export const useSizes = (): WindowSizes => {
  const [width, setWidth] = React.useState(window?.innerWidth || 0);
  const [height, setHeight] = React.useState(window?.innerHeight || 0);

  if (typeof window === 'undefined') {
    throw new Error('The hook useSizes can only be used client side');
  }

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    height,
  };
};

interface WindowSizes {
  width: number;
  height: number;
}
