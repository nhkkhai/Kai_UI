"use client";

import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Select from "@/components/ui/Select";
import TooltipDemo from "@/components/ui/TooltipDemo";
import Image from "next/image";
import { useState } from "react";

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
    <div className="flex flex-col gap-4 bg-black justify-center items-center">
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

      <Select
        label="Select 12312 123 123 123 12 3"
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
        ]}
        value="option2"
        colorScheme="dark"
        labelPosition="left"
        size="medium"
        onChange={(value) => console.log("Selected:", value)}
      />

      {/* TooltipBubble Demo */}
      <div className="w-full">
        <TooltipDemo />
      </div>
    </div>
  );
}
