import React, { useEffect, useState } from "react";
import { cn } from "@/utils/classNames";

export type ToastVariant = "default" | "success" | "warning" | "error" | "info";

export type ToastSize = "small" | "medium" | "large";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToastProps {
  id: string;
  variant?: ToastVariant;
  size?: ToastSize;
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  duration?: number;
  closable?: boolean;
  onClose?: (id: string) => void;
  className?: string;
}

const variantClass: Record<ToastVariant, string> = {
  default: "bg-white text-gray-900 border-gray-200 shadow-lg",
  success: "bg-green-50 text-green-800 border-green-200 shadow-green-100",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200 shadow-yellow-100",
  error: "bg-red-50 text-red-800 border-red-200 shadow-red-100",
  info: "bg-blue-50 text-blue-800 border-blue-200 shadow-blue-100",
};

const sizeClass: Record<ToastSize, string> = {
  small: "p-3 text-sm",
  medium: "p-4 text-base",
  large: "p-5 text-lg",
};

const iconSizeClass: Record<ToastSize, string> = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
};

const defaultIcons: Record<ToastVariant, string> = {
  default: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
  info: "ℹ️",
};

const Toast: React.FC<ToastProps> = ({
  id,
  variant = "default",
  size = "medium",
  title,
  message,
  icon,
  duration = 5000,
  closable = true,
  onClose,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  const displayIcon = icon || defaultIcons[variant];
  const hasContent = title || message;

  useEffect(() => {
    // Hiệu ứng enter
    const enterTimer = setTimeout(() => {
      setIsEntering(false);
    }, 50);

    // Auto close timer
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => {
        clearTimeout(enterTimer);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(enterTimer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.(id);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "relative border rounded-lg transition-all duration-700 ease-out",
        variantClass[variant],
        sizeClass[size],
        isEntering ? "opacity-0 translate-x-full" :
          isExiting ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0",
        className
      )}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        {displayIcon && (
          <div className={cn("flex-shrink-0 mt-0.5", iconSizeClass[size])}>
            {displayIcon}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-semibold mb-1">
              {title}
            </h4>
          )}
          {hasContent && (
            <div className="text-sm leading-relaxed">
              {message}
            </div>
          )}
        </div>

        {/* Close Button */}
        {closable && (
          <button
            type="button"
            onClick={handleClose}
            className={cn(
              "flex-shrink-0 ml-2 p-1 hover:bg-black/10 rounded transition-colors duration-200",
              iconSizeClass[size]
            )}
            aria-label="Close toast"
          >
            <svg
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Progress Bar */}
      {duration > 0 && (
        <div className="absolute bottom-0 left-0 h-1 bg-current opacity-20 rounded-b-lg">
          <div
            className="h-full bg-current transition-all duration-300 ease-linear"
            style={{
              width: isExiting ? "0%" : "100%",
              transitionDuration: `${duration}ms`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Toast;
