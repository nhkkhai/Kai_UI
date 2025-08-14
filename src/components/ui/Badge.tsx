import React from "react";
import { cn } from "@/utils/classNames";

interface BadgeProps {
  count: number;
  className?: string;
  blinking?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ count, className = "", blinking = false }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-1.5",
        blinking ? "animate-pulse" : "",
        className
      )}
    >
      <span>
        {count > 99 ? "99+" : count}
      </span>
    </div>
  );
};

export default Badge;
