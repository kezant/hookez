# Hookez

![Tests CI](https://github.com/keznet/hookez/actions/workflows/tests.yml/badge.svg)

Hookez is a set of React Hooks that can be helpful to your project.

## Getting Started

**Installation**

```
npm i hookez
```

Or, if you are using yarn:

```
yarn add hookez
```

**Usage**

Import the hook you want with a named import. Eg.:

```js
import { useHook } from 'hookez';
```

**Types**

Hookez was built on Typescript, so types are included in the package without the need to add extra types.

# Hooks available

### **useKeyPress**

This hook returns a boolean to indicate whether a specific key is being pressed or not.

#### Usage

```js
import { useKeyPress } from 'hookez';

const MyComponent = () => {
  const keyIsPressed = useKeyPress('Enter');

  return <p>Enter is {!keyIsPressed ? 'not' : ''} being pressed</p>;
};
```

### **useOnScreen**

This hook returns a boolean indicating when a component/element is visible on screen. It receives an HTML Element ref object.

#### Usage

```js
import { useEffect, createRef } from 'react';
import { useOnScreen } from 'hookez';

const MyComponent = () => {
  const ref = createRef<HTMLElement>();
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      // ...
    }
  }, [isOnScreen])

  return (
    <p ref={ref}>This paragraph is being tracked</p>
  )
}
```

### **useOnFound**

A bit similar to useOnScreen. This hook returns a boolean indicating if a component/element has been found on the screen. Once it's shown up, the return will always be true. It receives an HTML Element ref object.

#### Usage

```js
import { useEffect, createRef } from 'react';
import { useOnFound } from 'hookez';

const MyComponent = () => {
  const ref = createRef<HTMLElement>();
  const isFound = useOnFound(ref);

  useEffect(() => {
    if (isFound) {
      // ...
    }
  }, [isFound])

  return (
    <p ref={ref}>This paragraph is being tracked</p>
  )
}
```

### **useSizes**

This hook returns an object containing the current (inner) width and height of the window.

#### Usage

```js
import { useEffect, createRef } from 'react';
import { useSizes } from 'hookez';

const MyComponent = () => {
  const { width, height } = useSizes();

  return (
    <p>
      The window width is {width} and the height is {height}
    </p>
  );
};
```
