import React from "react";

interface GlitchIconProps {
  icon: React.ElementType;
  className?: string;
}

export function GlitchIcon({ icon: Icon, className = "" }: GlitchIconProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <Icon className="relative z-10 w-full h-full" />
      <Icon
        className="absolute top-0 left-[2px] w-full h-full text-red-500 opacity-80 z-0"
        style={{
          animation: "glitch-anim-2 3s infinite linear alternate-reverse",
        }}
      />
      <Icon
        className="absolute top-0 left-[-2px] w-full h-full text-blue-500 opacity-80 z-0"
        style={{
          animation: "glitch-anim 2.5s infinite linear alternate-reverse",
        }}
      />
    </div>
  );
}
