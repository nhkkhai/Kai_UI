interface LoadingProps {
  size?: "small" | "medium" | "large"; // Kích thước của spinner
  color?: string; // Màu sắc của spinner
  message?: string; // Thông điệp hiển thị bên dưới spinner
  showMessage?: boolean;
  variant?: "spinner" | "wave" | "dots";
}

const sizeMap = {
  small: "w-6 h-6 border-2",
  medium: "w-12 h-12 border-4",
  large: "w-20 h-20 border-8",
};

const sizeFontMap = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

const Loading = ({
  size = "medium",
  color = "#2563eb", // Màu xanh mặc định (khớp với hover của Navbar)
  message = "Loading...",
  showMessage = true,
  variant = "spinner",
}: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {variant === "spinner" ? (
        <div
          className={`animate-spin rounded-full border-transparent border-t-4 border-solid ${sizeMap[size]}`}
          style={{ borderTopColor: color }}
        />
      ) : variant === "wave" ? (
        <div className="w-full flex items-center justify-center">
          <g clipPath="url(#wave-clip)">
            <g transform="matrix(1,0,0,1,960,540)">
              <g>
                <path
                  stroke="url(#wave-gradient)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity="0"
                  strokeOpacity="1"
                  strokeWidth="11"
                  d="M-305.01,1.25C-281.81-40.54-252.44-163-283.33-163C-320.67-163-329.33,60.22-280.67,61C-249.33,61.5-240.67-1.49-222.20-1.49C-220.67-1.49-221.33-2-221.33-2C-221.33-2-230.18,2.30-230.18,1.49C-248.67,16-246.35,61-216.67,61C-174,61-182-8-200.67-8C-218-8-210.67,40.5-177.33,40.5C-150,40.5-143.33-8-119.33-8C-100-8-97.33,0.5-97.33,0.5C-97.33,0.5-98.75-7.88-118.92-7.88C-145.59-7.88-152.89,34.11-148,46.5C-142.67,60-127.20,67.61-111.33,45C-104.67,35.5-105.33,20-105.33,20C-105.33,20-104.57,36.75-100,48C-90.67,71-68.67,55-61.33,43.5C-55.53,34.39-37-7.75-17.67-7.75C-17.67-7.88-15.5-7.38-15.5-7.38C-15.5-7.38-18.92-7.69-18.92-7.63C-21.42-7.47-50.17,3.5-50.17,35C-50.17,50.5-41.67,58.28-34.31,58.28C-18,58.28-9.22,34.58-8.67,33.75C5.67,12.25,47.33-144.5,14.67-144.5C-15.33-144.5-15.33,0.5,1.33,33C4.88,39.91,12,57.75,23.33,57.75C37,57.75,62.83,36.25,62.83-17.75C62.83-34.63,51.33,64,77.67,64C108.33,64,128.33-13.25,139.33-13.25C150.33-13.25,141,56.75,145.33,56.75C149.67,56.75,175-5,193.67-5C209-5,189.67,61,211.33,61C254.33,61,239.67-6.75,283.67-6.75C294.67-6.75,303,2.25,303,2.25C303,2.25,293-6.75,283.67-6.75C251-6.75,233.25,48.76,264.33,58.75C269,60.25,293.67,53.25,293.67,17.25C293.67,3.25,292.67,147.40,292.67,184.5C292.67,212.5,267.02,251.94,253.33,215C246.67,197,260,138,282.67,111.5C300.10,91.12,338.47,23.06,342.33,13.94C343.47,11.24,785.57,11.33,1064.38,11.65"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,4000;2000,2000;4000,0;0,4000"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </g>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 1080"
            width={size === "small" ? 120 : size === "large" ? 320 : 200}
            height={size === "small" ? 68 : size === "large" ? 180 : 110}
            preserveAspectRatio="xMidYMid meet"
            className="animate-wave"
          >
            <defs>
              <clipPath id="wave-clip">
                <rect width="1920" height="1080" x="0" y="0" />
              </clipPath>
              <linearGradient
                id="wave-gradient"
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="100"
                y2="0"
              >
                <stop offset="0%" stopColor="#fb8282" />
                <stop offset="50%" stopColor="#fb7caa" />
                <stop offset="100%" stopColor="#fb76d1" />
              </linearGradient>
            </defs>
            <g clipPath="url(#wave-clip)">
              <g transform="matrix(1,0,0,1,960,540)">
                <g>
                  <path
                    stroke="url(#wave-gradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fillOpacity="0"
                    strokeOpacity="1"
                    strokeWidth="11"
                    d="M-305.01,1.25C-281.81-40.54-252.44-163-283.33-163C-320.67-163-329.33,60.22-280.67,61C-249.33,61.5-240.67-1.49-222.20-1.49C-220.67-1.49-221.33-2-221.33-2C-221.33-2-230.18,2.30-230.18,1.49C-248.67,16-246.35,61-216.67,61C-174,61-182-8-200.67-8C-218-8-210.67,40.5-177.33,40.5C-150,40.5-143.33-8-119.33-8C-100-8-97.33,0.5-97.33,0.5C-97.33,0.5-98.75-7.88-118.92-7.88C-145.59-7.88-152.89,34.11-148,46.5C-142.67,60-127.20,67.61-111.33,45C-104.67,35.5-105.33,20-105.33,20C-105.33,20-104.57,36.75-100,48C-90.67,71-68.67,55-61.33,43.5C-55.53,34.39-37-7.75-17.67-7.75C-17.67-7.88-15.5-7.38-15.5-7.38C-15.5-7.38-18.92-7.69-18.92-7.63C-21.42-7.47-50.17,3.5-50.17,35C-50.17,50.5-41.67,58.28-34.31,58.28C-18,58.28-9.22,34.58-8.67,33.75C5.67,12.25,47.33-144.5,14.67-144.5C-15.33-144.5-15.33,0.5,1.33,33C4.88,39.91,12,57.75,23.33,57.75C37,57.75,62.83,36.25,62.83-17.75C62.83-34.63,51.33,64,77.67,64C108.33,64,128.33-13.25,139.33-13.25C150.33-13.25,141,56.75,145.33,56.75C149.67,56.75,175-5,193.67-5C209-5,189.67,61,211.33,61C254.33,61,239.67-6.75,283.67-6.75C294.67-6.75,303,2.25,303,2.25C303,2.25,293-6.75,283.67-6.75C251-6.75,233.25,48.76,264.33,58.75C269,60.25,293.67,53.25,293.67,17.25C293.67,3.25,292.67,147.40,292.67,184.5C292.67,212.5,267.02,251.94,253.33,215C246.67,197,260,138,282.67,111.5C300.10,91.12,338.47,23.06,342.33,13.94C343.47,11.24,785.57,11.33,1064.38,11.65"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,4000;2000,2000;4000,0;0,4000"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      ) : (
        variant === "dots" && (
          <svg
            width={size === "small" ? 60 : size === "large" ? 180 : 120}
            height={size === "small" ? 20 : size === "large" ? 60 : 40}
            viewBox="0 0 300 60"
            style={{ display: "block" }}
          >
            <circle
              cx="50"
              cy="30"
              r="15"
              fill="#d20404"
              className="dot dot1"
            />
            <circle
              cx="100"
              cy="30"
              r="15"
              fill="#fbb03b"
              className="dot dot2"
            />
            <circle
              cx="150"
              cy="30"
              r="15"
              fill="#0071bc"
              className="dot dot3"
            />
            <circle
              cx="200"
              cy="30"
              r="15"
              fill="#662d91"
              className="dot dot4"
            />
            <circle
              cx="250"
              cy="30"
              r="15"
              fill="#b00168"
              className="dot dot5"
            />
            <style>{`
            .dot {
              transform-origin: center;
              animation: dot-bounce 1.2s infinite;
            }
            .dot1 { animation-delay: 0s; }
            .dot2 { animation-delay: 0.2s; }
            .dot3 { animation-delay: 0.4s; }
            .dot4 { animation-delay: 0.6s; }
            .dot5 { animation-delay: 0.8s; }
            @keyframes dot-bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-18px); }
            }
          `}</style>
          </svg>
        )
      )}
      {showMessage && (
        <p className={`mt-2 text-gray-600 ${sizeFontMap[size]}`}>{message}</p>
      )}
    </div>
  );
};

export default Loading;
