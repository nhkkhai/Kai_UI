"use client";

import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import TooltipDemo from "@/components/ui/TooltipDemo";
import ConfirmDialogDemo from "@/components/ui/ConfirmDialogDemo";
import TableDemo from "@/components/ui/TableDemo";
import BadgeDemo from "@/components/ui/BadgeDemo";
import AlertDemo from "@/components/ui/AlertDemo";
import Image from "next/image";
import { useState } from "react";
import Input from "@/components/ui/Input";

export default function Home() {
  // Danh sách tất cả các variant
  const variants = [
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "rose",
    "black",
    "gray",
    "white",
    "orange",
    "cyan",
    "ghost",
    "outline-primary",
    "outline-gray",
    "outline",
    "transparent",
    "black-outline",
    "danger",
    "danger-outline",
    "purple",
    "pink",
    "indigo",
    "teal",
    "emerald",
    "amber",
    "lime",
    "sky",
    "violet",
    "fuchsia",
    "slate",
    "zinc",
    "neutral",
    "stone",
    "red",
    "green",
    "yellow",
    "blue",
    "outline-purple",
    "outline-pink",
    "outline-indigo",
    "outline-teal",
    "outline-emerald",
    "outline-amber",
    "outline-lime",
    "outline-sky",
    "outline-violet",
    "outline-fuchsia",
    "glass",
    "neon",
    "metallic",
    "soft",
    "bordered",
    "gradient-blue",
    "gradient-green",
    "gradient-pink",
    "gradient-orange",
    "gradient-violet",
    "gradient-sunset",
    "gradient-ocean",
    "gradient-fire",
    "glass-blue",
    "glass-pink",
    "glass-green",
    "shadow-blue",
    "shadow-pink",
    "shadow-orange",
    "outline-dashed",
    "outline-dotted",
    "outline-double",
    "ghost-blue",
    "ghost-green",
    "ghost-pink",
  ];

  // Danh sách các icon để sử dụng
  const icons = [
    "home",
    "user",
    "settings",
    "heart",
    "star",
    "check",
    "plus",
    "minus",
    "search",
    "download",
    "upload",
    "edit",
    "delete",
    "share",
    "like",
    "dislike",
    "play",
    "pause",
    "stop",
    "next",
    "prev",
  ];

  // State cho DateRangePicker

  return (
    <div className="flex flex-col gap-4 justify-center items-center overflow-y-auto">
      <Loading variant="spinner" />

      {/* Button Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 w-full max-w-6xl">
        {variants.map((variant, index) => (
          <Button
            key={variant}
            variant={variant as any}
            size="medium"
            leftIcon={
              <Icon name={icons[index % icons.length] as any} size={16} />
            }
            rightIcon={
              index % 3 === 0 ? <Icon name="star" size={16} /> : undefined
            }
          >
            {variant}
          </Button>
        ))}
      </div>

      {/* TooltipBubble Demo */}
      <div className="w-full">
        <TooltipDemo />
      </div>

      {/* ConfirmDialog Demo */}
      <div className="w-full">
        <ConfirmDialogDemo />
      </div>

      {/* Table Demo */}
      <div className="w-full">
        <TableDemo />
      </div>
      {/* Input Demo */}
      <div className="w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Input Components Demo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Inputs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Basic Inputs</h3>
            <Input
              label="Họ và tên"
              placeholder="Nhập họ và tên"
              leftIcon={<span className="text-gray-400">👤</span>}
            />
            <Input
              label="Email"
              type="email"
              placeholder="example@email.com"
              leftIcon={<span className="text-gray-400">📧</span>}
            />
            <Input
              label="Mật khẩu"
              type="password"
              placeholder="Nhập mật khẩu"
              leftIcon={<span className="text-gray-400">🔒</span>}
              helperText="Mật khẩu phải có ít nhất 6 ký tự"
            />
          </div>

          {/* Input Variants */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Input Variants</h3>
            <Input
              label="Default"
              placeholder="Default variant"
              variant="default"
            />
            <Input
              label="Outline"
              placeholder="Outline variant"
              variant="outline"
            />
            <Input
              label="Filled"
              placeholder="Filled variant"
              variant="filled"
            />
            <Input
              label="Bordered"
              placeholder="Bordered variant"
              variant="bordered"
            />
            <Input
              label="Underlined"
              placeholder="Underlined variant"
              variant="underlined"
            />
          </div>

          {/* Input Sizes & States */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Sizes & States</h3>
            <Input
              label="Small Size"
              placeholder="Small input"
              size="small"
            />
            <Input
              label="Medium Size"
              placeholder="Medium input"
              size="medium"
            />
            <Input
              label="Large Size"
              placeholder="Large input"
              size="large"
            />
            <Input
              label="Disabled Input"
              placeholder="Disabled state"
              disabled
            />
            <Input
              label="Input with Error"
              placeholder="Error state"
              error="This field has an error"
            />
          </div>

          {/* Input with Icons */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Input with Icons</h3>
            <Input
              label="Left Icon Only"
              placeholder="Left icon"
              leftIcon={<span className="text-gray-400">🔍</span>}
            />
            <Input
              label="Right Icon Only"
              placeholder="Right icon"
              rightIcon={<span className="text-gray-400">✓</span>}
            />
            <Input
              label="Both Icons"
              placeholder="Both icons"
              leftIcon={<span className="text-gray-400">📱</span>}
              rightIcon={<span className="text-gray-400">📞</span>}
            />
          </div>

          {/* Rounded Corners */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Rounded Corners</h3>
            <Input
              label="No Rounded"
              placeholder="No rounded"
              rounded="none"
            />
            <Input
              label="Small Rounded"
              placeholder="Small rounded"
              rounded="sm"
            />
            <Input
              label="Medium Rounded"
              placeholder="Medium rounded"
              rounded="md"
            />
            <Input
              label="Large Rounded"
              placeholder="Large rounded"
              rounded="lg"
            />
            <Input
              label="Full Rounded"
              placeholder="Full rounded"
              rounded="full"
            />
          </div>

          {/* Form Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Form Example</h3>
            <Input
              label="Tuổi"
              type="number"
              placeholder="Nhập tuổi"
              leftIcon={<span className="text-gray-400">🎂</span>}
            />
            <Input
              label="Website"
              type="url"
              placeholder="https://example.com"
              leftIcon={<span className="text-gray-400">🌐</span>}
              helperText="Nhập URL website của bạn"
            />
            <Input
              label="Mô tả"
              placeholder="Nhập mô tả ngắn"
              leftIcon={<span className="text-gray-400">📝</span>}
            />
            <Input
              label="Số điện thoại"
              type="tel"
              placeholder="0123456789"
              leftIcon={<span className="text-gray-400">📞</span>}
            />
          </div>
        </div>
      </div>

      {/* Badge Demo */}
      <div className="w-full">
        <BadgeDemo />
      </div>

      {/* Alert Demo */}
      <div className="w-full">
        <AlertDemo />
      </div>


    </div>
  );
}
