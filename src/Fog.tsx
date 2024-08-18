"use client";

import React, { PropsWithChildren, useRef } from "react";
import FogEffect from "./FogEffect";
import useFog from "./utils/useFog";

export interface FogProps extends PropsWithChildren {
  fogRange?: number;
  fogColor?: string;
  height?: number;
}

const Fog: React.FC<FogProps> = ({ fogRange = 7, fogColor, height, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isTop, isBottom, isLeft, isRight } = useFog(ref);

  return (
    <div className="fog-wrapper" style={{ position: "relative" }}>
      {!isTop && (
        <FogEffect className="fog-effect-top" width="100%" height={`${fogRange}px`} top={0} fogColor={fogColor} />
      )}
      {!isBottom && (
        <FogEffect className="fog-effect-bottom" width="100%" height={`${fogRange}px`} bottom={0} fogColor={fogColor} />
      )}
      {!isLeft && (
        <FogEffect className="fog-effect-left" width={`${fogRange}px`} height="100%" left={0} fogColor={fogColor} />
      )}
      {!isRight && (
        <FogEffect className="fog-effect-right" width={`${fogRange}px`} height="100%" right={0} fogColor={fogColor} />
      )}
      <div className="fog-children" ref={ref} style={{ overflow: "auto", width: "100%", height: height }}>
        {children}
      </div>
    </div>
  );
};

export default Fog;
