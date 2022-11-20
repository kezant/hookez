/**
 * @jest-environment jsdom
 */

import { renderHook, act } from '@testing-library/react';
import { useKeyPress } from '../index';

test('should return true whether a key is pressed', () => {
  const key = 'Enter';
  const { result, rerender } = renderHook(() => useKeyPress(key));

  const event = new KeyboardEvent('keydown', { key: 'Enter' });

  act(() => {
    global.dispatchEvent(event);
    rerender();
  });

  expect(result.current).toBe(true);
});

test('should return false when key is up', () => {
  const key = 'Enter';
  const { result, rerender } = renderHook(() => useKeyPress(key));

  const event = new KeyboardEvent('keyup', { key: 'Enter' });

  act(() => {
    global.dispatchEvent(event);
    rerender();
  });

  expect(result.current).toBe(false);
});

test('should return false when key pressed is not targeted', () => {
  const key = 'Enter';
  const { result, rerender } = renderHook(() => useKeyPress(key));

  const event = new KeyboardEvent('keydown', { key: 'a' });

  act(() => {
    global.dispatchEvent(event);
    rerender();
  });

  expect(result.current).toBe(false);
});
