import React from "react";
import Button, { ButtonVariant } from "@/components/ui/Button";
import { cn } from "@/utils/classNames";

// Định nghĩa các loại variant có thể sử dụng
export type ConfirmDialogVariant = "dark" | "light" | "blackGlass" | "glass";

export type ConfirmDialogSize = "small" | "medium" | "large";

export type ConfirmDialogAnimation =
  | "fade"
  | "slide"
  | "scale"
  | "bounce"
  | "flip";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  icon?: React.ReactNode;
  variant?: ConfirmDialogVariant;
  size?: ConfirmDialogSize;
  animation?: ConfirmDialogAnimation;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

// Mapping kiểu variant sang class tailwind
const variantClass: Record<ConfirmDialogVariant, string> = {
  dark: "bg-gray-900 text-white border border-gray-700 shadow-2xl",
  light: "bg-gray-50 text-gray-900 border border-gray-200 shadow-lg",
  glass:
    "bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-2xl",
  blackGlass:
    "bg-black/20 backdrop-blur-md text-white border border-black/30 shadow-2xl",
};

const sizeClass: Record<ConfirmDialogSize, string> = {
  small: "min-w-[300px] max-w-[90vw] p-6",
  medium: "min-w-[400px] max-w-[90vw] p-8",
  large: "min-w-[500px] max-w-[90vw] p-10",
};

const animationClass: Record<ConfirmDialogAnimation, string> = {
  fade: "transition-opacity duration-300",
  slide: "transition-all duration-300",
  scale: "transition-all duration-300 transform",
  bounce: "transition-all duration-500 ease-bounce",
  flip: "transition-all duration-500 transform-gpu",
};

const getAnimationStyles = (
  animation: ConfirmDialogAnimation,
  isOpen: boolean
) => {
  switch (animation) {
    case "fade":
      return isOpen ? "opacity-100" : "opacity-0";
    case "slide":
      return isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
    case "scale":
      return isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95";
    case "bounce":
      return isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
    case "flip":
      return isOpen ? "opacity-100 rotate-x-0" : "opacity-0 rotate-x-12";
    default:
      return isOpen ? "opacity-100" : "opacity-0";
  }
};

const getIconColor = (variant: ConfirmDialogVariant) => {
  switch (variant) {
    case "dark":
    case "blackGlass":
      return "text-yellow-400";
    case "light":
      return "text-blue-500";
    case "glass":
      return "text-yellow-300";
    default:
      return "text-yellow-400";
  }
};

const getButtonVariants = (
  variant: ConfirmDialogVariant
): { confirm: ButtonVariant; cancel: ButtonVariant } => {
  switch (variant) {
    case "dark":
    case "blackGlass":
    case "glass":
      return {
        confirm: "outline",
        cancel: "black-outline",
      };
    case "light":
      return {
        confirm: "primary",
        cancel: "rose",
      };
    default:
      return {
        confirm: "primary",
        cancel: "rose",
      };
  }
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title = "Xác nhận",
  message,
  onConfirm,
  onCancel,
  confirmText = "Đồng ý",
  cancelText = "Huỷ",
  icon,
  variant = "light",
  size = "medium",
  animation = "scale",
  closeOnBackdrop = true,
  closeOnEscape = true,
  className = "",
}) => {
  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape) {
        onCancel();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, closeOnEscape, onCancel]);

  if (!open) return null;

  const buttonVariants = getButtonVariants(variant);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnBackdrop) {
      onCancel();
    }
  };

  const handleDialogClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center transition-all duration-300",
        animationClass[animation],
        getAnimationStyles(animation, open)
      )}
      onClick={handleOverlayClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Dialog Content */}
      <div
        className={cn(
          "relative rounded-2xl shadow-2xl transform transition-all duration-300",
          variantClass[variant],
          sizeClass[size],
          className
        )}
        onClick={handleDialogClick}
      >
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          {icon && (
            <div
              className={cn(
                "mb-4 text-4xl drop-shadow-lg",
                getIconColor(variant)
              )}
            >
              {icon}
            </div>
          )}

          {/* Title */}
          <div className="font-bold text-xl mb-3">{title}</div>

          {/* Message */}
          <div className="mb-6 text-base leading-relaxed opacity-90">
            {message}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center">
            <Button
              variant={buttonVariants.confirm}
              size="medium"
              className="px-6 py-2 min-w-[100px] font-medium"
              onClick={onConfirm}
            >
              {confirmText}
            </Button>
            <Button
              variant={buttonVariants.cancel}
              size="medium"
              className="px-6 py-2 min-w-[100px] font-medium"
              onClick={onCancel}
            >
              {cancelText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
