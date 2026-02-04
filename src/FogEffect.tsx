import type { HTMLAttributes } from 'react';

interface FogEffectProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
  height: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  fogColor?: string;
}

export default function FogEffect({
  width,
  height,
  top,
  bottom,
  left,
  right,
  fogColor = 'rgb(199, 199, 199)',
  ...props
}: FogEffectProps) {
  const getBackground = (): string | undefined => {
    if (top === 0) {
      return `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, ${fogColor} 100%)`;
    }
    if (bottom === 0) {
      return `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${fogColor} 100%)`;
    }
    if (left === 0) {
      return `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, ${fogColor} 100%)`;
    }
    if (right === 0) {
      return `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${fogColor} 100%)`;
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
        zIndex: 999,
        background: getBackground(),
        pointerEvents: 'none',
      }}
      {...props}
    />
  );
}
