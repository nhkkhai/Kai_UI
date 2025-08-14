import React from "react";
import { cn } from "@/utils/classNames";

// Định nghĩa các loại alert có thể sử dụng
export type AlertVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "outline";

export type AlertSize = "small" | "medium" | "large";

export type AlertRounded = "none" | "sm" | "md" | "lg" | "xl" | "full";

/**
 * Props cho component Alert
 * @property {AlertVariant} [variant] - Kiểu alert (mặc định: default)
 * @property {AlertSize} [size] - Kích thước alert (mặc định: medium)
 * @property {AlertRounded} [rounded] - Bo góc (mặc định: md)
 * @property {React.ReactNode} [icon] - Icon cho alert
 * @property {string} [title] - Tiêu đề alert
 * @property {React.ReactNode} [children] - Nội dung alert
 * @property {boolean} [closable] - Có thể đóng được không
 * @property {() => void} [onClose] - Callback khi đóng alert
 * @property {boolean} [bordered] - Có viền không
 */
interface AlertProps {
  variant?: AlertVariant;
  size?: AlertSize;
  rounded?: AlertRounded;
  icon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  bordered?: boolean;
  className?: string;
}

// Mapping kiểu alert sang class tailwind
const variantClass: Record<AlertVariant, string> = {
  default: "bg-blue-50 text-blue-800 border-blue-200",
  success: "bg-green-50 text-green-800 border-green-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
  error: "bg-red-50 text-red-800 border-red-200",
  info: "bg-blue-50 text-blue-800 border-blue-200",
  outline: "bg-transparent text-gray-700 border-gray-300",
};

const sizeClass: Record<AlertSize, string> = {
  small: "p-3 text-sm",
  medium: "p-4 text-base",
  large: "p-5 text-lg",
};

const iconSizeClass: Record<AlertSize, string> = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
};

const roundedClass: Record<AlertRounded, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

// Icon mặc định cho từng variant
const defaultIcons: Record<AlertVariant, string> = {
  default: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
  info: "ℹ️",
  outline: "💡",
};

/**
 * Component Alert - Alert tuỳ chỉnh, hỗ trợ nhiều kiểu, icon, và có thể đóng
 * @param {AlertProps} props - Các props truyền vào cho Alert
 * @returns {JSX.Element} Alert component
 */
const Alert: React.FC<AlertProps> = ({
  variant = "default",
  size = "medium",
  rounded = "md",
  icon,
  title,
  children,
  closable = false,
  onClose,
  bordered = true,
  className = "",
}) => {
  const displayIcon = icon || defaultIcons[variant];
  const hasContent = title || children;

  return (
    <div
      className={cn(
        "relative transition-all duration-200",
        variantClass[variant],
        sizeClass[size],
        roundedClass[rounded],
        bordered ? "border" : "",
        className
      )}
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
              {children}
            </div>
          )}
        </div>

        {/* Close Button */}
        {closable && (
          <button
            type="button"
            onClick={onClose}
            className={cn(
              "flex-shrink-0 ml-2 p-1 hover:bg-black/10 rounded transition-colors duration-200",
              iconSizeClass[size]
            )}
            aria-label="Close alert"
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
    </div>
  );
};

export default Alert;
