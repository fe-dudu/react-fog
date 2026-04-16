# react-fog

[![npm version](https://badge.fury.io/js/react-fog.svg)](https://badge.fury.io/js/react-fog)
![Platform](https://img.shields.io/badge/platform-Web-lightgrey)
[![npm downloads](https://img.shields.io/npm/dm/react-fog.svg?style=flat-square)](https://www.npmjs.com/package/react-fog)

A component that adds a fog effect to overflowed scroll containers to indicate scrollability.

**Demo**
`https://fe-dudu.github.io/react-fog`


![scroll-x](assets/scroll-x.gif)
![scroll](assets/scroll.gif)
![tab](assets/tab.gif)

## Getting Started

```
npm i react-fog
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `fogSize` | `number` | `7` | Fog thickness in pixels. |
| `fogInnerColor` | `string` | `rgba(0, 0, 0, 0)` | Inner side color (content side). Accepts any CSS color string, including `var(...)`. |
| `fogOuterColor` | `string` | `rgb(199, 199, 199)` | Outer side color (edge side). Accepts any CSS color string, including `var(...)`. |
| `height` | `number` | `undefined` | Scroll container height in pixels (enables y-axis fog). |
| `fogZIndex` | `number` | `999` | z-index for fog overlay. |
| `children` | `React.ReactNode` | `-` | Scrollable content. |

## Usage

### 1. Horizontal scroll fog

```tsx
import Fog from 'react-fog';

const LargeWidthComp = () => {
  // width: "100%", overflow: "auto"
  return (
    <Fog>
      <LargeWidth />
    </Fog>
  )
};
```

### 2. Both axes scroll fog

```tsx
import Fog from 'react-fog';

const LargeWidthComp = () => {
  // width: "100%", height: "300px", overflow: "auto"
  return (
    <Fog height={300}>
      <LargeWidthAndLargeHeight />
    </Fog>
  )
};
```

### 3. Change fog gradient

```tsx
import Fog from 'react-fog';

const LargeWidthComp = () => {
  return (
    <Fog
      fogInnerColor="rgba(255, 255, 255, 0)"
      fogOuterColor="rgba(0, 0, 0, 0.15)"
      height={300}
    >
      <LargeWidthAndLargeHeight />
    </Fog>
  )
};
```

### 4. Change fog size

```tsx
import Fog from 'react-fog';

const LargeWidthComp = () => {
  // 25px (default 7px)
  return (
    <Fog fogSize={25} height={300}>
      <LargeWidthAndLargeHeight />
    </Fog>
  )
};
```

### 4. Use a CSS variable

```tsx
import Fog from 'react-fog';

const LargeWidthComp = () => {
  return (
    <Fog
      height={300}
      fogInnerColor="var(--color-fog-inner)"
      fogOuterColor="var(--color-fog-outer-accent)"
    >
      <LargeWidthAndLargeHeight />
    </Fog>
  )
};
```

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Need Help?

Have questions or issues? Please open an [issue](https://github.com/fe-dudu/react-fog/issues).
