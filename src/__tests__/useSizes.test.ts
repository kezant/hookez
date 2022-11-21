/**
 * @jest-environment jsdom
 */

import { renderHook, act } from '@testing-library/react';
import { useSizes } from '../hooks/useSizes';

const resize = (width: number, height: number) => {
  const resizeEvent = document.createEvent('Event');
  resizeEvent.initEvent('resize', true, true);

  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = height || global.window.innerHeight;
  global.window.dispatchEvent(resizeEvent);
};

describe('useSizes', () => {
  test('should initiate with width greater than zero', () => {
    const { result } = renderHook(() => useSizes());

    expect(result.current.width).toBeGreaterThan(0);
  });

  test('should initiate with height greater than zero', () => {
    const { result } = renderHook(() => useSizes());

    expect(result.current.height).toBeGreaterThan(0);
  });

  test('should refresh on resize event', () => {
    const { result, rerender } = renderHook(() => useSizes());

    act(() => {
      resize(300, 500);
      rerender();
    });

    expect(result.current).toStrictEqual({ width: 300, height: 500 });
  });
});
