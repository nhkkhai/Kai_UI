import React from "react";
import TooltipBubble from "./TooltipBubble";
import Button from "./Button";

const TooltipDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          TooltipBubble Style Showcase
        </h1>
        <p className="text-gray-600 text-lg">
          Khám phá tất cả các style mới của TooltipBubble
        </p>
      </div>

      {/* Variants Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🎨 Variants
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "default",
            "primary",
            "success",
            "warning",
            "error",
            "info",
            "dark",
            "light",
            "glass",
            "blackGlass",
            "rose",
            "purple",
            "teal",
            "sky",
            "violet",
            "orange",
            "cyan",
            "pink",
          ].map((variant) => (
            <TooltipBubble
              key={variant}
              content={`${variant} tooltip`}
              variant={variant as any}
              placement="top"
            >
              <Button variant="outline" size="small" className="w-full">
                {variant}
              </Button>
            </TooltipBubble>
          ))}
        </div>
      </div>

      {/* Sizes Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          📏 Sizes
        </h2>

        <div className="flex items-center gap-6">
          <TooltipBubble
            content="Small tooltip"
            size="small"
            variant="primary"
            placement="top"
          >
            <Button size="small">Small</Button>
          </TooltipBubble>

          <TooltipBubble
            content="Medium tooltip"
            size="medium"
            variant="success"
            placement="top"
          >
            <Button size="medium">Medium</Button>
          </TooltipBubble>

          <TooltipBubble
            content="Large tooltip"
            size="large"
            variant="warning"
            placement="top"
          >
            <Button size="large">Large</Button>
          </TooltipBubble>
        </div>
      </div>

      {/* Rounded Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🔵 Rounded Corners
        </h2>

        <div className="flex items-center gap-6">
          {["none", "sm", "md", "lg", "xl", "2xl", "full"].map((rounded) => (
            <TooltipBubble
              key={rounded}
              content={`${rounded} rounded`}
              rounded={rounded as any}
              variant="purple"
              placement="top"
            >
              <Button variant="outline-purple" size="small">
                {rounded}
              </Button>
            </TooltipBubble>
          ))}
        </div>
      </div>

      {/* Animations Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          ✨ Animations
        </h2>

        <div className="flex items-center gap-6">
          {["fade", "slide", "scale", "bounce", "flip"].map((animation) => (
            <TooltipBubble
              key={animation}
              content={`${animation} animation`}
              animation={animation as any}
              variant="purple"
              placement="top"
            >
              <Button variant="outline-purple" size="small">
                {animation}
              </Button>
            </TooltipBubble>
          ))}
        </div>
      </div>

      {/* Placements Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          📍 Placements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <TooltipBubble
              content="Top placement"
              placement="top"
              variant="teal"
            >
              <Button variant="teal" className="w-full">
                Top
              </Button>
            </TooltipBubble>
          </div>

          <div className="text-center">
            <TooltipBubble
              content="Bottom placement"
              placement="bottom"
              variant="teal"
            >
              <Button variant="teal" className="w-full">
                Bottom
              </Button>
            </TooltipBubble>
          </div>

          <div className="text-center">
            <TooltipBubble
              content="Left placement"
              placement="left"
              variant="orange"
            >
              <Button variant="orange" className="w-full">
                Left
              </Button>
            </TooltipBubble>
          </div>

          <div className="text-center">
            <TooltipBubble
              content="Right placement"
              placement="right"
              variant="cyan"
            >
              <Button variant="cyan" className="w-full">
                Right
              </Button>
            </TooltipBubble>
          </div>
        </div>
      </div>

      {/* Alignments Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🎯 Alignments
        </h2>

        <div className="flex items-center gap-6">
          <TooltipBubble
            content="Left aligned"
            align="left"
            variant="sky"
            placement="top"
          >
            <Button variant="sky" size="small">
              Left
            </Button>
          </TooltipBubble>

          <TooltipBubble
            content="Center aligned"
            align="center"
            variant="violet"
            placement="top"
          >
            <Button variant="violet" size="small">
              Center
            </Button>
          </TooltipBubble>

          <TooltipBubble
            content="Right aligned"
            align="right"
            variant="pink"
            placement="top"
          >
            <Button variant="pink" size="small">
              Right
            </Button>
          </TooltipBubble>
        </div>
      </div>

      {/* Special Features Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🚀 Special Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Delay */}
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Delay (500ms)</h3>
            <TooltipBubble
              content="This tooltip has a 500ms delay"
              delay={500}
              variant="purple"
              placement="top"
            >
              <Button variant="purple">Hover me</Button>
            </TooltipBubble>
          </div>

          {/* No Arrow */}
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">No Arrow</h3>
            <TooltipBubble
              content="This tooltip has no arrow"
              showArrow={false}
              variant="glass"
              placement="top"
            >
              <Button variant="glass">No Arrow</Button>
            </TooltipBubble>
          </div>

          {/* Custom Width */}
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Custom Width</h3>
            <TooltipBubble
              content="This tooltip has a custom width of 300px"
              width={300}
              variant="teal"
              placement="top"
            >
              <Button variant="teal">Custom Width</Button>
            </TooltipBubble>
          </div>
        </div>
      </div>

      {/* BlackGlass Showcase */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🌑 BlackGlass Variant Showcase
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic BlackGlass */}
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-4">Basic BlackGlass</h3>
            <TooltipBubble
              content="Elegant black glass effect with backdrop blur"
              variant="blackGlass"
              placement="top"
            >
              <Button variant="outline" size="medium">
                BlackGlass
              </Button>
            </TooltipBubble>
          </div>

          {/* BlackGlass with Animation */}
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-4">Animated BlackGlass</h3>
            <TooltipBubble
              content="BlackGlass with bounce animation effect"
              variant="blackGlass"
              animation="bounce"
              placement="top"
            >
              <Button variant="outline" size="medium">
                Animated
              </Button>
            </TooltipBubble>
          </div>

          {/* BlackGlass Different Placements */}
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-4">BlackGlass Placements</h3>
            <div className="space-y-2">
              <TooltipBubble
                content="Top placement"
                variant="blackGlass"
                placement="top"
              >
                <Button variant="outline" size="small">
                  Top
                </Button>
              </TooltipBubble>
              <br />
              <TooltipBubble
                content="Bottom placement"
                variant="blackGlass"
                placement="bottom"
              >
                <Button variant="outline" size="small">
                  Bottom
                </Button>
              </TooltipBubble>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🎭 Advanced Examples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rich Content */}
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-4">Rich Content Tooltip</h3>
            <TooltipBubble
              content={
                <div className="text-center">
                  <div className="font-bold text-lg mb-2">
                    🌟 Premium Feature
                  </div>
                  <div className="text-sm opacity-90">
                    Unlock advanced capabilities with our premium plan
                  </div>
                  <div className="mt-2 text-xs opacity-75">
                    Click to learn more
                  </div>
                </div>
              }
              variant="rose"
              size="large"
              rounded="xl"
              animation="bounce"
              placement="top"
              width={250}
            >
              <Button variant="rose" size="large">
                Premium Feature
              </Button>
            </TooltipBubble>
          </div>

          {/* Interactive Tooltip */}
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-4">Interactive Tooltip</h3>
            <TooltipBubble
              content={
                <div className="text-center">
                  <div className="font-bold mb-2">🎮 Game Controls</div>
                  <div className="text-xs space-y-1">
                    <div>WASD - Move</div>
                    <div>Space - Jump</div>
                    <div>Shift - Run</div>
                  </div>
                </div>
              }
              variant="teal"
              size="medium"
              rounded="lg"
              animation="scale"
              placement="left"
              width={200}
            >
              <Button variant="teal" size="medium">
                Game Controls
              </Button>
            </TooltipBubble>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TooltipDemo;
