import React, { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import Button from "./Button";
import {
  FaTrash,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";

const ConfirmDialogDemo: React.FC = () => {
  const [openDialogs, setOpenDialogs] = useState<Record<string, boolean>>({});

  const openDialog = (dialogName: string) => {
    setOpenDialogs((prev) => ({ ...prev, [dialogName]: true }));
  };

  const closeDialog = (dialogName: string) => {
    setOpenDialogs((prev) => ({ ...prev, [dialogName]: false }));
  };

  const isDialogOpen = (dialogName: string) => openDialogs[dialogName] || false;

  const handleConfirm = (dialogName: string) => {
    console.log(`Confirmed: ${dialogName}`);
    closeDialog(dialogName);
  };

  const handleCancel = (dialogName: string) => {
    console.log(`Cancelled: ${dialogName}`);
    closeDialog(dialogName);
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ConfirmDialog Component Showcase
        </h1>
        <p className="text-gray-600 text-lg">
          Khám phá tất cả các tính năng của ConfirmDialog component
        </p>
      </div>

      {/* Basic Confirm Dialogs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🔔 Basic Confirm Dialogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Button
            variant="danger"
            onClick={() => openDialog("delete")}
            className="w-full"
            leftIcon={<FaTrash />}
          >
            Delete Item
          </Button>

          <Button
            variant="warning"
            onClick={() => openDialog("warning")}
            className="w-full"
            leftIcon={<FaExclamationTriangle />}
          >
            Warning Action
          </Button>

          <Button
            variant="primary"
            onClick={() => openDialog("info")}
            className="w-full"
            leftIcon={<FaInfoCircle />}
          >
            Information
          </Button>

          <Button
            variant="success"
            onClick={() => openDialog("success")}
            className="w-full"
            leftIcon={<FaCheckCircle />}
          >
            Success Action
          </Button>
        </div>

        {/* Delete Confirmation */}
        <ConfirmDialog
          open={isDialogOpen("delete")}
          title="Xác nhận xóa"
          message="Bạn có chắc chắn muốn xóa item này không? Hành động này không thể hoàn tác."
          onConfirm={() => handleConfirm("delete")}
          onCancel={() => handleCancel("delete")}
          confirmText="Xóa"
          cancelText="Hủy"
          icon={<FaTrash />}
          variant="dark"
        />

        {/* Warning Confirmation */}
        <ConfirmDialog
          open={isDialogOpen("warning")}
          title="Cảnh báo"
          message="Bạn sắp thực hiện một hành động quan trọng. Hãy đảm bảo rằng bạn hiểu rõ hậu quả."
          onConfirm={() => handleConfirm("warning")}
          onCancel={() => handleCancel("warning")}
          confirmText="Tiếp tục"
          cancelText="Dừng lại"
          icon={<FaExclamationTriangle />}
          variant="blackGlass"
        />

        {/* Info Confirmation */}
        <ConfirmDialog
          open={isDialogOpen("info")}
          title="Thông tin"
          message="Đây là một thông báo quan trọng mà bạn cần xác nhận trước khi tiếp tục."
          onConfirm={() => handleConfirm("info")}
          onCancel={() => handleCancel("info")}
          confirmText="Đã hiểu"
          cancelText="Đóng"
          icon={<FaInfoCircle />}
          variant="light"
        />

        {/* Success Confirmation */}
        <ConfirmDialog
          open={isDialogOpen("success")}
          title="Thành công"
          message="Hành động của bạn đã được thực hiện thành công. Bạn có muốn tiếp tục không?"
          onConfirm={() => handleConfirm("success")}
          onCancel={() => handleCancel("success")}
          confirmText="Tiếp tục"
          cancelText="Dừng lại"
          icon={<FaCheckCircle />}
          variant="glass"
        />
      </div>

      {/* Different Styles */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🎨 Different Styles
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["dark", "light", "blackGlass", "glass"].map((style) => (
            <Button
              key={style}
              variant={
                style === "dark"
                  ? "black"
                  : style === "light"
                  ? "gray"
                  : "primary"
              }
              onClick={() => openDialog(`style-${style}`)}
              className="w-full"
            >
              {style}
            </Button>
          ))}
        </div>

        {/* Style Dialogs */}
        {["dark", "light", "blackGlass", "glass"].map((style) => (
          <ConfirmDialog
            key={style}
            open={isDialogOpen(`style-${style}`)}
            title={`${style} Style`}
            message={`Đây là confirm dialog sử dụng style ${style}. Bạn có muốn tiếp tục không?`}
            onConfirm={() => handleConfirm(`style-${style}`)}
            onCancel={() => handleCancel(`style-${style}`)}
            confirmText="Tiếp tục"
            cancelText="Hủy"
            icon={<FaCheckCircle />}
            variant={style as any}
          />
        ))}
      </div>

      {/* Different Sizes */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          📏 Different Sizes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["small", "medium", "large"].map((size) => (
            <Button
              key={size}
              variant="primary"
              onClick={() => openDialog(`size-${size}`)}
              className="w-full"
            >
              {size}
            </Button>
          ))}
        </div>

        {/* Size Dialogs */}
        {["small", "medium", "large"].map((size) => (
          <ConfirmDialog
            key={size}
            open={isDialogOpen(`size-${size}`)}
            title={`${size} Size`}
            message={`Đây là confirm dialog với size ${size}. Kích thước này phù hợp cho ${
              size === "small"
                ? "thông báo ngắn"
                : size === "medium"
                ? "thông báo vừa"
                : "thông báo dài"
            }.`}
            onConfirm={() => handleConfirm(`size-${size}`)}
            onCancel={() => handleCancel(`size-${size}`)}
            confirmText="OK"
            cancelText="Cancel"
            icon={<FaInfoCircle />}
            variant="light"
            size={size as any}
          />
        ))}
      </div>

      {/* Different Animations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          ✨ Different Animations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {["fade", "slide", "scale", "bounce", "flip"].map((animation) => (
            <Button
              key={animation}
              variant="purple"
              onClick={() => openDialog(`animation-${animation}`)}
              className="w-full"
            >
              {animation}
            </Button>
          ))}
        </div>

        {/* Animation Dialogs */}
        {["fade", "slide", "scale", "bounce", "flip"].map((animation) => (
          <ConfirmDialog
            key={animation}
            open={isDialogOpen(`animation-${animation}`)}
            title={`${animation} Animation`}
            message={`Đây là confirm dialog sử dụng animation ${animation}. Bạn có thấy hiệu ứng đẹp không?`}
            onConfirm={() => handleConfirm(`animation-${animation}`)}
            onCancel={() => handleCancel(`animation-${animation}`)}
            confirmText="Đẹp lắm!"
            cancelText="Bình thường"
            icon={<FaCheckCircle />}
            variant="blackGlass"
            animation={animation as any}
          />
        ))}
      </div>

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🎭 Advanced Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Backdrop Options</h3>
            <div className="space-y-2">
              <Button
                variant="primary"
                onClick={() => openDialog("noBackdropClick")}
                className="w-full"
              >
                No Backdrop Click
              </Button>
              <Button
                variant="primary"
                onClick={() => openDialog("noEscape")}
                className="w-full"
              >
                No Escape Key
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Custom Content</h3>
            <div className="space-y-2">
              <Button
                variant="success"
                onClick={() => openDialog("customContent")}
                className="w-full"
              >
                Custom Content
              </Button>
              <Button
                variant="warning"
                onClick={() => openDialog("longMessage")}
                className="w-full"
              >
                Long Message
              </Button>
            </div>
          </div>
        </div>

        {/* No Backdrop Click Dialog */}
        <ConfirmDialog
          open={isDialogOpen("noBackdropClick")}
          title="Không thể đóng bằng backdrop"
          message="Dialog này không thể đóng bằng cách click vào backdrop. Bạn phải sử dụng nút để đóng."
          onConfirm={() => handleConfirm("noBackdropClick")}
          onCancel={() => handleCancel("noBackdropClick")}
          confirmText="Đã hiểu"
          cancelText="Đóng"
          icon={<FaExclamationTriangle />}
          variant="light"
          closeOnBackdrop={false}
        />

        {/* No Escape Key Dialog */}
        <ConfirmDialog
          open={isDialogOpen("noEscape")}
          title="Không thể đóng bằng Escape"
          message="Dialog này không thể đóng bằng phím Escape. Bạn phải sử dụng nút để đóng."
          onConfirm={() => handleConfirm("noEscape")}
          onCancel={() => handleCancel("noEscape")}
          confirmText="Đã hiểu"
          cancelText="Đóng"
          icon={<FaExclamationTriangle />}
          variant="dark"
          closeOnEscape={false}
        />

        {/* Custom Content Dialog */}
        <ConfirmDialog
          open={isDialogOpen("customContent")}
          title="Nội dung tùy chỉnh"
          message="Bạn có muốn tùy chỉnh nội dung của dialog này không? Chúng ta có thể thêm nhiều tính năng thú vị."
          onConfirm={() => handleConfirm("customContent")}
          onCancel={() => handleCancel("customContent")}
          confirmText="Có, tôi muốn!"
          cancelText="Không, cảm ơn"
          icon={<FaCheckCircle />}
          variant="glass"
          size="large"
        />

        {/* Long Message Dialog */}
        <ConfirmDialog
          open={isDialogOpen("longMessage")}
          title="Thông báo dài"
          message="Đây là một thông báo rất dài để kiểm tra xem dialog có xử lý tốt nội dung dài không. Thông báo này có thể chứa nhiều dòng văn bản và các thông tin chi tiết quan trọng mà người dùng cần đọc trước khi đưa ra quyết định. Chúng ta cũng có thể thêm các thông tin bổ sung như điều khoản, điều kiện hoặc các lưu ý quan trọng khác."
          onConfirm={() => handleConfirm("longMessage")}
          onCancel={() => handleCancel("longMessage")}
          confirmText="Tôi đã đọc và đồng ý"
          cancelText="Tôi cần thêm thời gian"
          icon={<FaInfoCircle />}
          variant="blackGlass"
          size="large"
        />
      </div>

      {/* Real-world Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🌍 Real-world Examples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">E-commerce</h3>
            <div className="space-y-2">
              <Button
                variant="danger"
                onClick={() => openDialog("removeFromCart")}
                className="w-full"
              >
                Remove from Cart
              </Button>
              <Button
                variant="warning"
                onClick={() => openDialog("clearCart")}
                className="w-full"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">User Management</h3>
            <div className="space-y-2">
              <Button
                variant="danger"
                onClick={() => openDialog("deleteAccount")}
                className="w-full"
              >
                Delete Account
              </Button>
              <Button
                variant="warning"
                onClick={() => openDialog("logout")}
                className="w-full"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Remove from Cart */}
        <ConfirmDialog
          open={isDialogOpen("removeFromCart")}
          title="Xóa khỏi giỏ hàng"
          message="Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?"
          onConfirm={() => handleConfirm("removeFromCart")}
          onCancel={() => handleCancel("removeFromCart")}
          confirmText="Xóa"
          cancelText="Giữ lại"
          icon={<FaTrash />}
          variant="dark"
        />

        {/* Clear Cart */}
        <ConfirmDialog
          open={isDialogOpen("clearCart")}
          title="Làm trống giỏ hàng"
          message="Bạn có chắc chắn muốn xóa tất cả sản phẩm trong giỏ hàng? Hành động này không thể hoàn tác."
          onConfirm={() => handleConfirm("clearCart")}
          onCancel={() => handleCancel("clearCart")}
          confirmText="Làm trống"
          cancelText="Hủy"
          icon={<FaExclamationTriangle />}
          variant="blackGlass"
        />

        {/* Delete Account */}
        <ConfirmDialog
          open={isDialogOpen("deleteAccount")}
          title="Xóa tài khoản"
          message="Bạn có chắc chắn muốn xóa tài khoản của mình? Tất cả dữ liệu sẽ bị mất vĩnh viễn và không thể khôi phục."
          onConfirm={() => handleConfirm("deleteAccount")}
          onCancel={() => handleCancel("deleteAccount")}
          confirmText="Xóa tài khoản"
          cancelText="Hủy"
          icon={<FaExclamationTriangle />}
          variant="dark"
          size="large"
        />

        {/* Logout */}
        <ConfirmDialog
          open={isDialogOpen("logout")}
          title="Đăng xuất"
          message="Bạn có chắc chắn muốn đăng xuất khỏi tài khoản? Bạn sẽ cần đăng nhập lại để tiếp tục sử dụng."
          onConfirm={() => handleConfirm("logout")}
          onCancel={() => handleCancel("logout")}
          confirmText="Đăng xuất"
          cancelText="Ở lại"
          icon={<FaInfoCircle />}
          variant="light"
        />
      </div>
    </div>
  );
};

export default ConfirmDialogDemo;
