"use client";

import React, { useState } from "react";
import Alert from "./Alert";

const AlertDemo: React.FC = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, variant: "success" as const, title: "Thành công!", message: "Dữ liệu đã được lưu thành công." },
    { id: 2, variant: "warning" as const, title: "Cảnh báo", message: "Vui lòng kiểm tra lại thông tin trước khi tiếp tục." },
    { id: 3, variant: "error" as const, title: "Lỗi", message: "Không thể kết nối đến máy chủ. Vui lòng thử lại sau." },
  ]);

  const handleCloseAlert = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const addAlert = (variant: "success" | "warning" | "error") => {
    const messages = {
      success: { title: "Thành công!", message: "Thao tác đã hoàn tất thành công." },
      warning: { title: "Cảnh báo", message: "Có vấn đề cần chú ý." },
      error: { title: "Lỗi", message: "Đã xảy ra lỗi không mong muốn." },
    };

    const newAlert = {
      id: Date.now(),
      variant,
      ...messages[variant]
    };

    setAlerts(prev => [...prev, newAlert]);
  };

  return (
    <div className="w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Alert Components Demo</h2>

      <div className="space-y-8">
        {/* Alert Variants */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Alert Variants</h3>
          <div className="space-y-4">
            <Alert variant="default" title="Thông tin">
              Đây là thông báo thông tin mặc định với icon ℹ️.
            </Alert>

            <Alert variant="success" title="Thành công!">
              Dữ liệu đã được lưu thành công vào hệ thống.
            </Alert>

            <Alert variant="warning" title="Cảnh báo">
              Vui lòng kiểm tra lại thông tin trước khi tiếp tục.
            </Alert>

            <Alert variant="error" title="Lỗi nghiêm trọng">
              Không thể kết nối đến máy chủ. Vui lòng thử lại sau.
            </Alert>

            <Alert variant="info" title="Thông tin mới">
              Có cập nhật mới cho ứng dụng của bạn.
            </Alert>

            <Alert variant="outline" title="Gợi ý">
              Bạn có thể tùy chỉnh giao diện theo ý muốn.
            </Alert>
          </div>
        </div>

        {/* Alert Sizes */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Alert Sizes</h3>
          <div className="space-y-4">
            <Alert size="small" variant="info" title="Small Alert">
              Đây là alert kích thước nhỏ với padding và text nhỏ hơn.
            </Alert>

            <Alert size="medium" variant="info" title="Medium Alert">
              Đây là alert kích thước trung bình (mặc định).
            </Alert>

            <Alert size="large" variant="info" title="Large Alert">
              Đây là alert kích thước lớn với padding và text lớn hơn.
            </Alert>
          </div>
        </div>

        {/* Alert with Custom Icons */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Alert with Custom Icons</h3>
          <div className="space-y-4">
            <Alert
              variant="success"
              title="Tải xuống hoàn tất"
              icon={<span className="text-2xl">📥</span>}
            >
              File đã được tải xuống thành công vào thư mục Downloads.
            </Alert>

            <Alert
              variant="warning"
              title="Bảo trì hệ thống"
              icon={<span className="text-2xl">🔧</span>}
            >
              Hệ thống sẽ bảo trì từ 2:00 AM đến 4:00 AM ngày mai.
            </Alert>

            <Alert
              variant="error"
              title="Mất kết nối"
              icon={<span className="text-2xl">📡</span>}
            >
              Không thể kết nối internet. Vui lòng kiểm tra mạng.
            </Alert>

            <Alert
              variant="info"
              title="Cập nhật mới"
              icon={<span className="text-2xl">🆕</span>}
            >
              Phiên bản mới v2.1.0 đã có sẵn để tải xuống.
            </Alert>
          </div>
        </div>

        {/* Closable Alerts */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Closable Alerts</h3>
          <div className="space-y-4">
            <Alert
              variant="success"
              title="Thông báo có thể đóng"
              closable
              onClose={() => alert('Alert đã được đóng!')}
            >
              Bạn có thể đóng alert này bằng cách nhấn nút X.
            </Alert>

            <Alert
              variant="warning"
              title="Cảnh báo quan trọng"
              closable
              onClose={() => alert('Cảnh báo đã được đóng!')}
            >
              Đây là cảnh báo quan trọng mà bạn có thể đóng.
            </Alert>
          </div>
        </div>

        {/* Dynamic Alerts */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Dynamic Alerts</h3>
          <div className="space-y-4">
            {/* Add Alert Buttons */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => addAlert("success")}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Thêm Success Alert
              </button>
              <button
                onClick={() => addAlert("warning")}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
              >
                Thêm Warning Alert
              </button>
              <button
                onClick={() => addAlert("error")}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Thêm Error Alert
              </button>
            </div>

            {/* Dynamic Alert List */}
            {alerts.map(alert => (
              <Alert
                key={alert.id}
                variant={alert.variant}
                title={alert.title}
                closable
                onClose={() => handleCloseAlert(alert.id)}
              >
                {alert.message}
              </Alert>
            ))}
          </div>
        </div>

        {/* Alert Rounded Corners */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Alert Rounded Corners</h3>
          <div className="space-y-4">
            <Alert variant="info" rounded="none" title="No Rounded">
              Alert không có bo góc.
            </Alert>
            <Alert variant="info" rounded="sm" title="Small Rounded">
              Alert với bo góc nhỏ.
            </Alert>
            <Alert variant="info" rounded="md" title="Medium Rounded">
              Alert với bo góc trung bình (mặc định).
            </Alert>
            <Alert variant="info" rounded="lg" title="Large Rounded">
              Alert với bo góc lớn.
            </Alert>
            <Alert variant="info" rounded="xl" title="Extra Large Rounded">
              Alert với bo góc rất lớn.
            </Alert>
            <Alert variant="info" rounded="full" title="Full Rounded">
              Alert với bo góc hoàn toàn.
            </Alert>
          </div>
        </div>

        {/* Alert without Border */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Alert without Border</h3>
          <div className="space-y-4">
            <Alert variant="success" bordered={false} title="Không có viền">
              Alert này không có viền, tạo cảm giác nhẹ nhàng hơn.
            </Alert>
            <Alert variant="warning" bordered={false} title="Cảnh báo nhẹ">
              Cảnh báo không có viền, phù hợp cho thông báo nhẹ nhàng.
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertDemo;
