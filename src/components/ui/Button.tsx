import React from "react";
import Loading from "@/components/ui/Loading";
import { cn } from "@/utils/classNames";

// Định nghĩa các loại button có thể sử dụng
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "rose"
  | "black"
  | "gray"
  | "white"
  | "orange"
  | "cyan"
  | "ghost"
  | "outline-primary"
  | "outline-gray"
  | "outline"
  | "transparent"
  | "black-outline"
  | "danger"
  | "danger-outline"
  | "purple"
  | "pink"
  | "indigo"
  | "teal"
  | "emerald"
  | "amber"
  | "lime"
  | "sky"
  | "violet"
  | "fuchsia"
  | "slate"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "outline-purple"
  | "outline-pink"
  | "outline-indigo"
  | "outline-teal"
  | "outline-emerald"
  | "outline-amber"
  | "outline-lime"
  | "outline-sky"
  | "outline-violet"
  | "outline-fuchsia"
  | "glass"
  | "neon"
  | "metallic"
  | "soft"
  | "bordered"
  // Thêm các kiểu mới
  | "gradient-blue"
  | "gradient-green"
  | "gradient-pink"
  | "gradient-orange"
  | "gradient-violet"
  | "gradient-sunset"
  | "gradient-ocean"
  | "gradient-fire"
  | "glass-blue"
  | "glass-pink"
  | "glass-green"
  | "shadow-blue"
  | "shadow-pink"
  | "shadow-orange"
  | "outline-dashed"
  | "outline-dotted"
  | "outline-double"
  | "ghost-blue"
  | "ghost-green"
  | "ghost-pink";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonRounded =
  | "full"
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

/**
 * Props cho component Button
 * @property {React.ReactNode} children - Nội dung hiển thị trong nút
 * @property {ButtonVariant} [variant] - Kiểu nút (mặc định: primary)
 * @property {ButtonSize} [size] - Kích thước nút (small, medium, large)
 * @property {boolean} [loading] - Trạng thái loading (hiển thị spinner)
 * @property {React.ReactNode} [leftIcon] - Icon bên trái
 * @property {React.ReactNode} [rightIcon] - Icon bên phải
 * @property {boolean} [disabled] - Trạng thái disabled
 * @property {string} [className] - Class CSS tuỳ chỉnh
 * @property {...} [props] - Các props khác của button
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rounded?: ButtonRounded;
}

// Mapping kiểu button sang class tailwind
const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  warning: "bg-yellow-600 text-white hover:bg-yellow-700",
  error: "bg-red-600 text-white hover:bg-red-700",
  rose: "bg-rose-600 text-white hover:bg-rose-700",
  success: "bg-green-600 text-white hover:bg-green-700",
  outline: "border border-gray-400 text-gray-800 bg-white hover:bg-gray-100",
  black: "bg-black text-white hover:bg-gray-800",
  orange: "bg-orange-400 text-white hover:bg-orange-500",
  white: "bg-white text-black hover:bg-gray-100",
  gray: "bg-gray-400 text-white hover:bg-gray-500",
  ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
  cyan: "bg-cyan-500 text-white hover:bg-cyan-600",
  "outline-primary":
    "border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-50",
  "outline-gray":
    "border border-gray-500 text-gray-300 bg-transparent hover:bg-gray-800",
  transparent: "bg-transparent text-gray-600 hover:bg-[#181818]",
  "black-outline": "hover:bg-[#262626] bg-[#181818] border-[#444] text-white",
  danger: "bg-red-600 text-white hover:bg-red-700",
  "danger-outline":
    "border border-red-500 text-red-500 bg-transparent hover:bg-red-50",
  purple:
    "bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-purple-500/25",
  pink: "bg-pink-600 text-white hover:bg-pink-700 shadow-lg hover:shadow-pink-500/25",
  indigo:
    "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/25",
  teal: "bg-teal-600 text-white hover:bg-teal-700 shadow-lg hover:shadow-teal-500/25",
  emerald:
    "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-emerald-500/25",
  amber:
    "bg-amber-600 text-white hover:bg-amber-700 shadow-lg hover:shadow-amber-500/25",
  lime: "bg-lime-600 text-white hover:bg-lime-700 shadow-lg hover:shadow-lime-500/25",
  sky: "bg-sky-600 text-white hover:bg-sky-700 shadow-lg hover:shadow-sky-500/25",
  violet:
    "bg-violet-600 text-white hover:bg-violet-700 shadow-lg hover:shadow-violet-500/25",
  fuchsia:
    "bg-fuchsia-600 text-white hover:bg-fuchsia-700 shadow-lg hover:shadow-fuchsia-500/25",
  slate:
    "bg-slate-600 text-white hover:bg-slate-700 shadow-lg hover:shadow-slate-500/25",
  zinc: "bg-zinc-600 text-white hover:bg-zinc-700 shadow-lg hover:shadow-zinc-500/25",
  neutral:
    "bg-neutral-600 text-white hover:bg-neutral-700 shadow-lg hover:shadow-neutral-500/25",
  stone:
    "bg-stone-600 text-white hover:bg-stone-700 shadow-lg hover:shadow-stone-500/25",
  red: "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-500/25",
  green:
    "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-500/25",
  yellow:
    "bg-yellow-600 text-white hover:bg-yellow-700 shadow-lg hover:shadow-yellow-500/25",
  blue: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25",
  "outline-purple":
    "border border-purple-500 text-purple-500 bg-transparent hover:bg-purple-50 hover:border-purple-600",
  "outline-pink":
    "border border-pink-500 text-pink-500 bg-transparent hover:bg-pink-50 hover:border-pink-600",
  "outline-indigo":
    "border border-indigo-500 text-indigo-500 bg-transparent hover:bg-indigo-50 hover:border-indigo-600",
  "outline-teal":
    "border border-teal-500 text-teal-500 bg-transparent hover:bg-teal-50 hover:border-teal-600",
  "outline-emerald":
    "border border-emerald-500 text-emerald-500 bg-transparent hover:bg-emerald-50 hover:border-emerald-600",
  "outline-amber":
    "border border-amber-500 text-amber-500 bg-transparent hover:bg-amber-50 hover:border-amber-600",
  "outline-lime":
    "border border-lime-500 text-lime-500 bg-transparent hover:bg-lime-50 hover:border-lime-600",
  "outline-sky":
    "border border-sky-500 text-sky-500 bg-transparent hover:bg-sky-50 hover:border-sky-600",
  "outline-violet":
    "border border-violet-500 text-violet-500 bg-transparent hover:bg-violet-50 hover:border-violet-600",
  "outline-fuchsia":
    "border border-fuchsia-500 text-fuchsia-500 bg-transparent hover:bg-fuchsia-50 hover:border-fuchsia-600",
  glass:
    "bg-white/30 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg",
  neon: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 shadow-lg shadow-cyan-500/25",
  metallic:
    "bg-gradient-to-r from-gray-400 to-gray-600 text-white hover:from-gray-500 hover:to-gray-700 shadow-lg",
  soft: "bg-gradient-to-r from-pink-300 to-purple-300 text-white hover:from-pink-400 hover:to-purple-400 shadow-lg",
  bordered:
    "border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 hover:border-gray-400 shadow-sm",
  // Các kiểu gradient mới
  "gradient-blue":
    "bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500",
  "gradient-green":
    "bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600",
  "gradient-pink":
    "bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white hover:from-pink-500 hover:to-fuchsia-600",
  "gradient-orange":
    "bg-gradient-to-r from-orange-400 to-amber-500 text-white hover:from-orange-500 hover:to-amber-600",
  "gradient-violet":
    "bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600",
  "gradient-sunset":
    "bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 text-white hover:from-pink-600 hover:to-yellow-400",
  "gradient-ocean":
    "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white hover:from-cyan-500 hover:to-indigo-700",
  "gradient-fire":
    "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:to-red-600",
  // Glassmorphism
  "glass-blue":
    "bg-blue-200/20 backdrop-blur-md border border-blue-300/30 text-blue-900 hover:bg-blue-200/30",
  "glass-pink":
    "bg-pink-200/20 backdrop-blur-md border border-pink-300/30 text-pink-900 hover:bg-pink-200/30",
  "glass-green":
    "bg-green-200/20 backdrop-blur-md border border-green-300/30 text-green-900 hover:bg-green-200/30",
  // Shadow nổi bật
  "shadow-blue":
    "bg-blue-600 text-white shadow-lg shadow-blue-400/50 hover:bg-blue-700",
  "shadow-pink":
    "bg-pink-600 text-white shadow-lg shadow-pink-400/50 hover:bg-pink-700",
  "shadow-orange":
    "bg-orange-500 text-white shadow-lg shadow-orange-300/50 hover:bg-orange-600",
  // Outline đặc biệt
  "outline-dashed":
    "border-2 border-dashed border-blue-400 text-blue-600 bg-white hover:bg-blue-50",
  "outline-dotted":
    "border-2 border-dotted border-pink-400 text-pink-600 bg-white hover:bg-pink-50",
  "outline-double":
    "border-4 border-double border-green-400 text-green-600 bg-white hover:bg-green-50",
  // Ghost
  "ghost-blue":
    "bg-transparent text-blue-600 border border-blue-400 hover:bg-blue-50",
  "ghost-green":
    "bg-transparent text-green-600 border border-green-400 hover:bg-green-50",
  "ghost-pink":
    "bg-transparent text-pink-600 border border-pink-400 hover:bg-pink-50",
};

const sizeClass: Record<ButtonSize, string> = {
  small: "px-2 py-1 min-h-[32px]",
  medium: "px-4 py-2 min-h-[40px] ",
  large: "px-6 py-3 min-h-[48px]",
};

const sizeFontClass: Record<ButtonSize, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
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
 * Component Button - Nút bấm tuỳ chỉnh, hỗ trợ nhiều kiểu, loading, icon, disabled
 * @param {ButtonProps} props - Các props truyền vào cho Button
 * @returns {JSX.Element} Nút bấm
 */
const Button = ({
  children,
  variant = "primary",
  size = "medium",
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  rounded = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      // Class tailwind cho style, hiệu ứng, trạng thái
      className={cn(
        "inline-flex items-center justify-between gap-2 rounded transition-all duration-150",
        roundedClass[rounded],
        "font-medium focus:outline-none focus:ring-0 outline-none",
        variantClass[variant],
        sizeClass[size],
        className,
        loading || disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      )}
      disabled={loading || disabled}
      {...props}
    >
      {/* Icon bên trái nếu có */}
      {leftIcon && !loading && <span>{leftIcon}</span>}
      {/* Loading nằm giữa, ngang hàng với text */}
      <div className="flex flex-1 items-center justify-center gap-2">
        {loading && (
          <Loading size={"small"} showMessage={false} variant="spinner" />
        )}
        <span className={cn(sizeFontClass[size])}>{children}</span>
      </div>
      {/* Icon bên phải nếu có */}
      {rightIcon && !loading && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
