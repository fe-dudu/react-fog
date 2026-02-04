import type { HTMLAttributes } from 'react';

interface FogEffectProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
  height: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  fogInnerColor: string;
  fogOuterColor: string;
  zIndex?: number;
}

export default function FogEffect({
  width,
  height,
  top,
  bottom,
  left,
  right,
  fogInnerColor,
  fogOuterColor,
  zIndex = 999,
  ...props
}: FogEffectProps) {
  const getBackground = (): string | undefined => {
    if (top === 0) {
      return `linear-gradient(to top, ${fogInnerColor} 0%, ${fogOuterColor} 100%)`;
    }
    if (bottom === 0) {
      return `linear-gradient(to bottom, ${fogInnerColor} 0%, ${fogOuterColor} 100%)`;
    }
    if (left === 0) {
      return `linear-gradient(to left, ${fogInnerColor} 0%, ${fogOuterColor} 100%)`;
    }
    if (right === 0) {
      return `linear-gradient(to right, ${fogInnerColor} 0%, ${fogOuterColor} 100%)`;
    }
    return undefined;
  };

  return (
    <div
      style={{
        width: width,
        height: height,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        position: 'absolute',
        zIndex: zIndex,
        background: getBackground(),
        pointerEvents: 'none',
      }}
      {...props}
    />
  );
}
