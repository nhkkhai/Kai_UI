import React from "react";
import { cn } from "@/utils/classNames";
import Toast, { ToastProps, ToastPosition } from "./Toast";

export interface ToastContainerProps {
  toasts: ToastProps[];
  position?: ToastPosition;
  maxToasts?: number;
  onClose?: (id: string) => void;
  className?: string;
}

const positionClass: Record<ToastPosition, string> = {
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 transform -translate-x-1/2",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
};

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  position = "top-right",
  maxToasts = 5,
  onClose,
  className = "",
}) => {
  const displayToasts = toasts.slice(0, maxToasts);

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col gap-3 w-80 max-w-[90vw]",
        positionClass[position],
        className
      )}
    >
      {displayToasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
