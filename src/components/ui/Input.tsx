import React, { forwardRef } from "react";
import { cn } from "@/utils/classNames";

// Định nghĩa các loại input có thể sử dụng
export type InputVariant = "default" | "outline" | "filled" | "bordered" | "underlined";
export type InputSize = "small" | "medium" | "large";
export type InputRounded = "none" | "sm" | "md" | "lg" | "xl" | "full";

/**
 * Props cho component Input
 * @property {string} [type] - Loại input (text, email, password, etc.)
 * @property {string} [placeholder] - Placeholder text
 * @property {InputVariant} [variant] - Kiểu input (mặc định: default)
 * @property {InputSize} [size] - Kích thước input (mặc định: medium)
 * @property {InputRounded} [rounded] - Bo góc (mặc định: md)
 * @property {string} [label] - Label cho input
 * @property {string} [helperText] - Text hỗ trợ
 * @property {string} [error] - Thông báo lỗi
 * @property {React.ReactNode} [leftIcon] - Icon bên trái
 * @property {React.ReactNode} [rightIcon] - Icon bên phải
 */
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  rounded?: InputRounded;
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Mapping kiểu input sang class tailwind
const variantClass: Record<InputVariant, string> = {
  default: "bg-white border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
  outline: "bg-transparent border-2 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
  filled: "bg-gray-50 border border-gray-300 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
  bordered: "bg-white border-2 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
  underlined: "bg-transparent border-b-2 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-0 rounded-none",
};

const sizeClass: Record<InputSize, string> = {
  small: "px-3 py-2 text-sm",
  medium: "px-4 py-3 text-base",
  large: "px-5 py-4 text-lg",
};

const sizeIconClass: Record<InputSize, string> = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
};

const roundedClass: Record<
  "full" | "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl",
  string
> = {
  full: "rounded-full",
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-4xl",
  "5xl": "rounded-5xl",
};

/**
 * Component Input - Input field tuỳ chỉnh, hỗ trợ nhiều kiểu, icon, validation
 * @param {InputProps} props - Các props truyền vào cho Input
 * @returns {JSX.Element} Input field
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      variant = "default",
      size = "medium",
      rounded = "md",
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      disabled,
      readOnly,
      className = "",
      ...props
    },
    ref
  ) => {
    const hasError = !!error;
    const isDisabled = disabled || readOnly;

    return (
      <div className={cn("w-full", className)}>
        {/* Label */}
        {label && (
          <label
            className={cn(
              "block text-sm font-medium text-gray-700 mb-2",
              hasError ? "text-red-600" : "",
              isDisabled ? "text-gray-400" : ""
            )}
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input container */}
        <div className="relative">
          {/* Left icon */}
          {leftIcon && (
            <div
              className={cn(
                "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                sizeIconClass[size]
              )}
            >
              {leftIcon}
            </div>
          )}

          {/* Input field */}
          <input
            ref={ref}
            type={type}
            className={cn(
              "w-full transition-all duration-200 focus:outline-none",
              roundedClass[rounded],
              variantClass[variant],
              sizeClass[size],
              leftIcon ? "pl-10" : "",
              rightIcon ? "pr-10" : "",
              hasError ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "",
              isDisabled ? "opacity-60 cursor-not-allowed bg-gray-100" : ""
            )}
            disabled={isDisabled}
            readOnly={readOnly}
            {...props}
          />

          {/* Right icon */}
          {rightIcon && (
            <div
              className={cn(
                "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                sizeIconClass[size]
              )}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {/* Helper text */}
        {helperText && !hasError && (
          <p className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}

        {/* Error text */}
        {hasError && (
          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
