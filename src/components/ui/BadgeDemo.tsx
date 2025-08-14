"use client";

import React from "react";
import Badge from "./Badge";

const BadgeDemo: React.FC = () => {
  return (
    <div className="w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Badge Components Demo</h2>

      <div className="space-y-8">
        {/* Notification Badges */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Badges</h3>
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative inline-block">
              <div className="w-12 h-12 bg-gradient-to-b from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📷</span>
              </div>
              <Badge count={12} blinking={true} className="absolute -top-2 -right-2" />
            </div>

            <div className="relative inline-block">
              <div className="w-12 h-12 bg-gradient-to-b from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🔔</span>
              </div>
              <Badge count={5} blinking={true} className="absolute -top-2 -right-2" />
            </div>

            <div className="relative inline-block">
              <div className="w-12 h-12 bg-gradient-to-b from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">💬</span>
              </div>
              <Badge count={99} blinking={true} className="absolute -top-2 -right-2" />
            </div>

            <div className="relative inline-block">
              <div className="w-12 h-12 bg-gradient-to-b from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">⊞</span>
              </div>
              <Badge count={3} blinking={true} className="absolute -top-2 -right-2" />
            </div>
          </div>
        </div>

        {/* Different Count Examples */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Different Count Examples</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge count={1} blinking={true} />
            <Badge count={5} blinking={true} />
            <Badge count={12} blinking={true} />
            <Badge count={25} blinking={true} />
            <Badge count={99} blinking={true} />
            <Badge count={150} blinking={true} />
            <Badge count={999} blinking={true} />
          </div>
        </div>

        {/* Blinking vs Static Badges */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Blinking vs Static Badges</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Static Badge</p>
              <Badge count={8} />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Blinking Badge</p>
              <Badge count={8} blinking={true} />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Static Badge</p>
              <Badge count={15} />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Blinking Badge</p>
              <Badge count={15} blinking={true} />
            </div>
          </div>
        </div>

        {/* Badge on Different Elements */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Badge on Different Elements</h3>
          <div className="flex flex-wrap items-center gap-6">
            {/* Button with badge */}
            <button className="relative px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs mr-2">N</span>
              Messages
              <Badge count={8} blinking={true} className="absolute -top-2 -right-2" />
            </button>

            {/* Avatar with badge */}
            <div className="relative">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-lg">👤</span>
              </div>
              <Badge count={2} blinking={true} className="absolute -top-1 -right-1" />
            </div>

            {/* Icon with badge */}
            <div className="relative">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">✓</span>
              </div>
              <Badge count={15} blinking={true} className="absolute -top-1 -right-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeDemo;
