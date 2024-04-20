"use client";

import { HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from "react";
import "./styles.css"; 

interface FogEffectProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
  height: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  fogColor?: string;
}

const FogEffect: React.FC<FogEffectProps> = ({
  width,
  height,
  top,
  bottom,
  left,
  right,
  fogColor = "rgb(199, 199, 199)",
}) => {
  const getBackground = (): string | undefined => {
    if (top === 0) return `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, ${fogColor} 100%)`;
    if (bottom === 0) return `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${fogColor} 100%)`;
    if (left === 0) return `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, ${fogColor} 100%)`;
    if (right === 0) return `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${fogColor} 100%)`;
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
        position: "absolute",
        zIndex: 999,
        background: getBackground(),
      }}
    />
  );
};

interface FogProps extends PropsWithChildren {
  fogRange?: number;
  fogColor?: string;
  height?: number;
}

const Fog: React.FC<FogProps> = ({ fogRange = 7, fogColor, height, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [el, setEl] = useState<HTMLDivElement | null>(null);
  const [isTop, setIsTop] = useState<boolean>(true);
  const [isBottom, setIsBottom] = useState<boolean>(true);
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [isRight, setIsRight] = useState<boolean>(true);

  useEffect(() => {
    setEl(ref.current);
  }, [ref]);

  useEffect(() => {
    const handleFog = (): void => {
      if (!el) return;
      setIsLeft(el.scrollLeft <= 0);
      setIsRight(el.scrollLeft + el.clientWidth + 1 >= el.scrollWidth);
      setIsTop(el.scrollTop <= 0);
      setIsBottom(el.scrollTop + el.clientHeight + 1 >= el.scrollHeight);
    };

    handleFog();
    window.addEventListener("resize", handleFog);
    if (el) el.addEventListener("scroll", handleFog);

    return () => {
      window.removeEventListener("resize", handleFog);
      if (el) el.removeEventListener("scroll", handleFog);
    };
  }, [el]);

  return (
      <div className="fog-wrapper" style={{ position: "relative" }}>
          {!isTop && (
              <FogEffect
                  className="fog-effect-top"
                  width="100%"
                  height={`${fogRange}px`}
                  top={0}
                  fogColor={fogColor}
              />
          )}
          {!isBottom && (
              <FogEffect
                  className="fog-effect-bottom"
                  width="100%"
                  height={`${fogRange}px`}
                  bottom={0}
                  fogColor={fogColor}
              />
          )}
          {!isLeft && (
              <FogEffect
                  className="fog-effect-left"
                  width={`${fogRange}px`}
                  height="100%"
                  left={0}
                  fogColor={fogColor}
              />
          )}
          {!isRight && (
              <FogEffect
                  className="fog-effect-right"
                  width={`${fogRange}px`}
                  height="100%"
                  right={0}
                  fogColor={fogColor}
              />
          )}
          <div className="fog-children" ref={ref} style={{ overflow: "auto", width: "100%", height: height, scrollbarWidth: "none" }}>
              {children}
          </div>
      </div>
  );
};

export default Fog;
