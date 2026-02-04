import { useRef } from 'react';

import FogEffect from './FogEffect';
import useFog from './utils/useFog';

interface FogProps {
  fogSize?: number;
  fogInnerColor?: string;
  fogOuterColor?: string;
  height?: number;
  fogZIndex?: number;
  children: React.ReactNode;
}

export default function Fog({
  fogSize = 7,
  fogInnerColor = 'rgba(0, 0, 0, 0)',
  fogOuterColor = 'rgb(199, 199, 199)',
  height,
  fogZIndex,
  children,
}: FogProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isTop, isBottom, isLeft, isRight } = useFog(ref);

  return (
    <div className="fog-wrapper" style={{ position: 'relative' }}>
      {!isTop && (
        <FogEffect
          className="fog-effect-top"
          width="100%"
          height={`${fogSize}px`}
          top={0}
          fogInnerColor={fogInnerColor}
          fogOuterColor={fogOuterColor}
          zIndex={fogZIndex}
        />
      )}
      {!isBottom && (
        <FogEffect
          className="fog-effect-bottom"
          width="100%"
          height={`${fogSize}px`}
          bottom={0}
          fogInnerColor={fogInnerColor}
          fogOuterColor={fogOuterColor}
          zIndex={fogZIndex}
        />
      )}
      {!isLeft && (
        <FogEffect
          className="fog-effect-left"
          width={`${fogSize}px`}
          height="100%"
          left={0}
          fogInnerColor={fogInnerColor}
          fogOuterColor={fogOuterColor}
          zIndex={fogZIndex}
        />
      )}
      {!isRight && (
        <FogEffect
          className="fog-effect-right"
          width={`${fogSize}px`}
          height="100%"
          right={0}
          fogInnerColor={fogInnerColor}
          fogOuterColor={fogOuterColor}
          zIndex={fogZIndex}
        />
      )}
      <div className="fog-children" ref={ref} style={{ overflow: 'auto', width: '100%', height: height }}>
        {children}
      </div>
    </div>
  );
}
