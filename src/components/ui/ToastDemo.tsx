"use client";

import React, { useState } from "react";
import { useToast } from "./ToastProvider";

const ToastDemo: React.FC = () => {
  const { showToast, closeAllToasts } = useToast();
  const [position, setPosition] = useState<"top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left">("top-right");

  const showBasicToast = () => {
    showToast({
      title: "Thông báo cơ bản",
      message: "Đây là một toast thông báo đơn giản.",
      variant: "default",
    });
  };

  const showSuccessToast = () => {
    showToast({
      title: "Thành công!",
      message: "Dữ liệu đã được lưu thành công.",
      variant: "success",
    });
  };

  const showWarningToast = () => {
    showToast({
      title: "Cảnh báo",
      message: "Vui lòng kiểm tra lại thông tin trước khi tiếp tục.",
      variant: "warning",
    });
  };

  const showErrorToast = () => {
    showToast({
      title: "Lỗi!",
      message: "Không thể kết nối đến máy chủ. Vui lòng thử lại sau.",
      variant: "error",
    });
  };

  const showInfoToast = () => {
    showToast({
      title: "Thông tin",
      message: "Có cập nhật mới cho ứng dụng của bạn.",
      variant: "info",
    });
  };

  const showCustomIconToast = () => {
    showToast({
      title: "Tải xuống hoàn tất",
      message: "File đã được tải xuống thành công.",
      variant: "success",
      icon: <span className="text-2xl">📥</span>,
    });
  };

  const showLongDurationToast = () => {
    showToast({
      title: "Toast lâu",
      message: "Toast này sẽ hiển thị trong 10 giây.",
      variant: "info",
      duration: 10000,
    });
  };

  const showNoAutoCloseToast = () => {
    showToast({
      title: "Không tự đóng",
      message: "Toast này sẽ không tự đóng, bạn phải đóng thủ công.",
      variant: "warning",
      duration: 0,
    });
  };

  const showSmallToast = () => {
    showToast({
      title: "Toast nhỏ",
      message: "Toast với kích thước nhỏ.",
      variant: "default",
      size: "small",
    });
  };

  const showLargeToast = () => {
    showToast({
      title: "Toast lớn",
      message: "Toast với kích thước lớn và nhiều nội dung hơn.",
      variant: "default",
      size: "large",
    });
  };

  const showMultipleToasts = () => {
    showToast({
      title: "Toast 1",
      message: "Toast đầu tiên",
      variant: "success",
    });

    setTimeout(() => {
      showToast({
        title: "Toast 2",
        message: "Toast thứ hai",
        variant: "info",
      });
    }, 500);

    setTimeout(() => {
      showToast({
        title: "Toast 3",
        message: "Toast thứ ba",
        variant: "warning",
      });
    }, 1000);

    setTimeout(() => {
      showToast({
        title: "Toast 4",
        message: "Toast thứ tư",
        variant: "error",
      });
    }, 1500);
  };

  return (
    <div className="w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Toast Components Demo</h2>

      <div className="space-y-8">
        {/* Toast Variants */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Toast Variants</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <button
              onClick={showBasicToast}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Default
            </button>
            <button
              onClick={showSuccessToast}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Success
            </button>
            <button
              onClick={showWarningToast}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
            >
              Warning
            </button>
            <button
              onClick={showErrorToast}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Error
            </button>
            <button
              onClick={showInfoToast}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Info
            </button>
          </div>
        </div>

        {/* Toast Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Toast Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <button
              onClick={showCustomIconToast}
              className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
            >
              Custom Icon
            </button>
            <button
              onClick={showLongDurationToast}
              className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
            >
              Long Duration (10s)
            </button>
            <button
              onClick={showNoAutoCloseToast}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              No Auto Close
            </button>
            <button
              onClick={showSmallToast}
              className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
            >
              Small Size
            </button>
            <button
              onClick={showLargeToast}
              className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
            >
              Large Size
            </button>
            <button
              onClick={showMultipleToasts}
              className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors"
            >
              Multiple Toasts
            </button>
          </div>
        </div>

        {/* Toast Position */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Toast Position</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {[
                "top-left",
                "top-center",
                "top-right",
                "bottom-left",
                "bottom-center",
                "bottom-right"
              ].map((pos) => (
                <button
                  key={pos}
                  onClick={() => setPosition(pos as any)}
                  className={cn(
                    "px-3 py-1 rounded text-sm transition-colors",
                    position === pos
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  )}
                >
                  {pos.replace("-", " ")}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Vị trí hiện tại: <strong>{position.replace("-", " ")}</strong>
            </p>
          </div>
        </div>

        {/* Toast Management */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Toast Management</h3>
          <div className="flex gap-3">
            <button
              onClick={closeAllToasts}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Đóng tất cả Toasts
            </button>
          </div>
        </div>

        {/* Information */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Thông tin về Toast</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Toast sẽ tự động đóng sau 5 giây (mặc định)</li>
            <li>• Bạn có thể đóng toast bằng nút X</li>
            <li>• Toast có thanh progress bar hiển thị thời gian còn lại</li>
            <li>• Tối đa 5 toast cùng lúc (có thể thay đổi)</li>
            <li>• Hỗ trợ 6 vị trí khác nhau trên màn hình</li>
            <li>• Có thể tùy chỉnh icon, kích thước và thời gian hiển thị</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export default ToastDemo;
