# react-fog

[![npm version](https://badge.fury.io/js/react-fog.svg)](https://badge.fury.io/js/react-fog)
![Platform](https://img.shields.io/badge/platform-Web-lightgrey)
[![npm downloads](https://img.shields.io/npm/dm/react-fog.svg?style=flat-square)](https://www.npmjs.com/package/react-fog)

A component that adds a fog effect to indicate scrollability to overflowed components.


![scroll-x](https://i.ibb.co/rHGDDPF/scroll-x.gif)
![scroll](https://i.ibb.co/WnwW76n/scroll.gif)
![tab](https://i.ibb.co/92PpLF5/tab.gif)
![fog-color](https://i.ibb.co/n8dXLLX/fog-color-change.png)
![fog-range](https://i.ibb.co/6Rjf6Kc/fog-range.png)

## Getting Started

```
npm i react-fog
```

## Usage

### 1. X-axis scroll fog effect

```
import Fog from 'react-fog';

const LargeWidthComp = () => {
  return (
    <Fog> // width: "100%", overflow: "auto"
      <LargeWidth />
    </Fog>
  )
};
```

### 2. X-axis, Y-axis scroll fog effect

```
import Fog from 'react-fog';

const LargeWidthComp = () => {
  return (
    <Fog height={300}> // width: "100%", height: "300px", overflow: "auto"
      <LargeWidthAndLargeHeight />
    </Fog>
  )
};
```

### 3. Change Fog color

```
import Fog from 'react-fog';

const LargeWidthComp = () => {
  return (
    <Fog fogColor="#0af373" height={300}>
      <LargeWidthAndLargeHeight />
    </Fog>
  )
};
```

### 4. Change Fog range

```
import Fog from 'react-fog';

const LargeWidthComp = () => {
  return (
    <Fog fogRange={25} height={300}> // 25px, default 7px
      <LargeWidthAndLargeHeight />
    </Fog>
  )
};
```

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Need Help?

Have questions or issues? Please open an [issue](https://github.com/fe-dudu/react-fog/issues).
