import { cn } from "@/utils/classNames";
import React, { ReactNode, useState } from "react";

// Định nghĩa các loại tooltip có thể sử dụng
export type TooltipVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "dark"
  | "light"
  | "glass"
  | "blackGlass"
  | "rose"
  | "purple"
  | "teal"
  | "sky"
  | "violet"
  | "orange"
  | "cyan"
  | "pink";

export type TooltipSize = "small" | "medium" | "large";

export type TooltipRounded =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full";

export type TooltipAnimation = "fade" | "slide" | "scale" | "bounce" | "flip";

interface TooltipBubbleProps {
  content: ReactNode;
  children: ReactNode;
  className?: string;
  placement?: "top" | "bottom" | "left" | "right";
  align?: "center" | "left" | "right";
  width?: number | string;
  variant?: TooltipVariant;
  size?: TooltipSize;
  rounded?: TooltipRounded;
  animation?: TooltipAnimation;
  showArrow?: boolean;
  delay?: number;
  maxWidth?: number | string;
}

// Mapping kiểu tooltip sang class tailwind
const variantClass: Record<TooltipVariant, string> = {
  default: "bg-[#232323] text-white border-[#444]",
  primary: "bg-blue-600 text-white border-blue-500",
  success: "bg-green-600 text-white border-green-500",
  warning: "bg-yellow-600 text-white border-yellow-500",
  error: "bg-red-600 text-white border-red-500",
  info: "bg-blue-500 text-white border-blue-400",
  dark: "bg-gray-900 text-white border-gray-700",
  light: "bg-white text-gray-900 border-gray-200",
  glass: "bg-white/20 backdrop-blur-md text-white border-none",
  blackGlass: "bg-black/20 backdrop-blur-md text-white border-none",
  rose: "bg-rose-500 text-white border-rose-400",
  purple: "bg-purple-600 text-white border-purple-500",
  teal: "bg-teal-600 text-white border-teal-500",
  sky: "bg-sky-600 text-white border-sky-500",
  violet: "bg-violet-600 text-white border-violet-500",
  orange: "bg-orange-500 text-white border-orange-400",
  cyan: "bg-cyan-500 text-white border-cyan-400",
  pink: "bg-pink-600 text-white border-pink-500",
};

const sizeClass: Record<TooltipSize, string> = {
  small: "text-xs px-2 py-1",
  medium: "text-sm px-3 py-2",
  large: "text-base px-4 py-3",
};

const roundedClass: Record<TooltipRounded, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

const animationClass: Record<TooltipAnimation, string> = {
  fade: "transition-opacity duration-200",
  slide: "transition-all duration-200",
  scale: "transition-all duration-200 transform",
  bounce: "transition-all duration-300 ease-bounce",
  flip: "transition-all duration-300 transform-gpu",
};

const getAnimationStyles = (animation: TooltipAnimation, show: boolean) => {
  switch (animation) {
    case "fade":
      return show ? "opacity-100" : "opacity-0";
    case "slide":
      return show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2";
    case "scale":
      return show ? "opacity-100 scale-100" : "opacity-0 scale-95";
    case "bounce":
      return show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3";
    case "flip":
      return show ? "opacity-100 rotate-x-0" : "opacity-0 rotate-x-12";
    default:
      return show ? "opacity-100" : "opacity-0";
  }
};

const TooltipBubble: React.FC<TooltipBubbleProps> = ({
  content,
  children,
  className = "",
  placement = "top",
  align = "center",
  width,
  variant = "default",
  size = "medium",
  rounded = "md",
  animation = "fade",
  showArrow = true,
  delay = 0,
  maxWidth,
}) => {
  const [show, setShow] = useState(false);

  // Xác định vị trí bubble
  let positionClass = "";
  if (placement === "top") {
    positionClass =
      (align === "center"
        ? "left-1/2 -translate-x-1/2"
        : align === "left"
        ? "right-0"
        : "left-0") + " bottom-full mb-2";
  } else if (placement === "bottom") {
    positionClass =
      (align === "center"
        ? "left-1/2 -translate-x-1/2"
        : align === "left"
        ? "right-0"
        : "left-0") + " top-full mt-2";
  } else if (placement === "left") {
    positionClass = "right-full mr-2 top-1/2 -translate-y-1/2";
  } else if (placement === "right") {
    positionClass = "left-full ml-2 top-1/2 -translate-y-1/2";
  }

  const bubbleStyle: React.CSSProperties = {
    minWidth: 80,
    ...(width ? { width: typeof width === "number" ? width : width } : {}),
    ...(maxWidth
      ? { maxWidth: typeof maxWidth === "number" ? maxWidth : maxWidth }
      : {}),
  };

  // Lấy màu cho arrow dựa trên variant
  const getArrowColor = () => {
    const variantColors: Record<
      TooltipVariant,
      { border: string; bg: string }
    > = {
      default: { border: "oklch(26.5% 0 0)", bg: "oklch(13.7% 0 0)" },
      primary: {
        border: "oklch(62.3% 0.214 259.815)",
        bg: "oklch(54.6% 0.245 262.881)",
      },
      success: {
        border: "oklch(72.3% 0.219 149.579)",
        bg: "oklch(62.7% 0.194 149.214)",
      },
      warning: {
        border: "oklch(79.5% 0.184 86.047)",
        bg: "oklch(68.1% 0.162 75.834)",
      },
      error: {
        border: "oklch(63.7% 0.237 25.331)",
        bg: "oklch(57.7% 0.245 27.325)",
      },
      info: {
        border: "oklch(70.7% 0.165 254.624)",
        bg: "oklch(62.3% 0.214 259.815)",
      },
      dark: {
        border: "oklch(37.3% 0.034 259.733)",
        bg: "oklch(21% 0.034 264.665)",
      },
      light: {
        border: "oklch(92.8% 0.006 264.531)",
        bg: "white",
      },
      glass: { border: "rgba(255,255,255,0.2)", bg: "rgba(255,255,255,0)" },
      blackGlass: { border: "rgba(0,0,0,0.2)", bg: "rgba(0,0,0,0)" },
      rose: {
        border: "oklch(71.2% 0.194 13.428)",
        bg: "oklch(64.5% 0.246 16.439)",
      },
      purple: {
        border: "oklch(62.7% 0.265 303.9)",
        bg: "oklch(55.8% 0.288 302.321)",
      },
      teal: {
        border: "oklch(70.4% 0.14 182.503)",
        bg: "oklch(60% 0.118 184.704)",
      },
      sky: {
        border: "oklch(68.5% 0.169 237.323)",
        bg: "oklch(58.8% 0.158 241.966)",
      },
      violet: {
        border: "oklch(60.6% 0.25 292.717)",
        bg: "oklch(54.1% 0.281 293.009)",
      },
      orange: {
        border: "oklch(75% 0.183 55.934)",
        bg: "oklch(70.5% 0.213 47.604)",
      },
      cyan: {
        border: "oklch(78.9% 0.154 211.53)",
        bg: "oklch(71.5% 0.143 215.221)",
      },
      pink: {
        border: "oklch(65.6% 0.241 354.308)",
        bg: "oklch(59.2% 0.249 0.584)",
      },
    };
    return variantColors[variant] || variantColors.default;
  };

  const arrowColors = getArrowColor();

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => {
          if (delay > 0) {
            setTimeout(() => setShow(true), delay);
          } else {
            setShow(true);
          }
        }}
        onMouseLeave={() => setShow(false)}
        className="inline-block"
      >
        {children}
      </div>
      <div
        className={cn(
          `pointer-events-none absolute z-20 ${animationClass[animation]}
          ${getAnimationStyles(animation, show)}
          ${positionClass}
          `,
          className
        )}
        style={bubbleStyle}
      >
        <div className="relative flex flex-col items-center">
          <div
            className={cn(
              "border text-center shadow-lg",
              variantClass[variant],
              sizeClass[size],
              roundedClass[rounded]
            )}
          >
            {content}
          </div>

          {/* Mũi nhọn với style tương ứng variant */}
          {showArrow && placement === "top" && (
            <div className="relative flex justify-center h-0">
              <div
                className="w-0 h-0 absolute top-0"
                style={{
                  borderLeft: "12px solid transparent",
                  borderRight: "12px solid transparent",
                  borderTop: `12px solid ${arrowColors.border}`,
                }}
              />
              <div
                className="w-0 h-0 absolute -top-[1px] left-0 -translate-x-1/2"
                style={{
                  borderLeft: "11px solid transparent",
                  borderRight: "11px solid transparent",
                  borderTop: `11px solid ${arrowColors.bg}`,
                }}
              />
            </div>
          )}

          {/* Arrow cho các vị trí khác */}
          {showArrow && placement === "bottom" && (
            <div className=" flex justify-center h-0">
              <div
                className="w-0 h-0 absolute -translate-y-full top-0"
                style={{
                  borderLeft: "12px solid transparent",
                  borderRight: "12px solid transparent",
                  borderBottom: `12px solid ${arrowColors.border}`,
                }}
              />
              <div
                className="w-0 h-0 absolute -translate-y-full top-[1px] "
                style={{
                  borderLeft: "11px solid transparent",
                  borderRight: "11px solid transparent",
                  borderBottom: `11px solid ${arrowColors.bg}`,
                }}
              />
            </div>
          )}

          {showArrow && placement === "left" && (
            <div className=" flex items-center justify-center w-0">
              <div
                className="w-0 h-0 absolute top-1/2 -translate-y-1/2 right-0 translate-x-full"
                style={{
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderLeft: `12px solid ${arrowColors.border}`,
                }}
              />
              <div
                className="w-0 h-0 absolute right-[1px] top-1/2 -translate-y-1/2 translate-x-full"
                style={{
                  borderTop: "11px solid transparent",
                  borderBottom: "11px solid transparent",
                  borderLeft: `11px solid ${arrowColors.bg}`,
                }}
              />
            </div>
          )}

          {showArrow && placement === "right" && (
            <div className=" flex items-center w-0">
              <div
                className="w-0 h-0 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full"
                style={{
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderRight: `12px solid ${arrowColors.border}`,
                }}
              />
              <div
                className="w-0 h-0 absolute left-[1px] top-1/2 -translate-y-1/2 -translate-x-full"
                style={{
                  borderTop: "11px solid transparent",
                  borderBottom: "11px solid transparent",
                  borderRight: `11px solid ${arrowColors.bg}`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TooltipBubble;
