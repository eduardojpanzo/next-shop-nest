import React from "react";
interface ThreeDotsLoaderProps {
  fill?: string;
}

export function ThreeDotsLoader({ fill = "#2c2c2c" }: ThreeDotsLoaderProps) {
  return (
    <div className="flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="30"
        fill={fill}
        viewBox="0 0 120 30"
      >
        <circle cx="15" cy="15" r="15">
          <animate
            attributeName="r"
            begin="0s"
            calcMode="linear"
            dur="0.8s"
            from="15"
            repeatCount="indefinite"
            to="15"
            values="15;9;15"
          ></animate>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            calcMode="linear"
            dur="0.8s"
            from="1"
            repeatCount="indefinite"
            to="1"
            values="1;.5;1"
          ></animate>
        </circle>
        <circle cx="60" cy="15" r="9" fillOpacity="0.3">
          <animate
            attributeName="r"
            begin="0s"
            calcMode="linear"
            dur="0.8s"
            from="9"
            repeatCount="indefinite"
            to="9"
            values="9;15;9"
          ></animate>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            calcMode="linear"
            dur="0.8s"
            from="0.5"
            repeatCount="indefinite"
            to="0.5"
            values=".5;1;.5"
          ></animate>
        </circle>
        <circle cx="105" cy="15" r="15">
          <animate
            attributeName="r"
            begin="0s"
            calcMode="linear"
            dur="0.8s"
            from="15"
            repeatCount="indefinite"
            to="15"
            values="15;9;15"
          ></animate>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            calcMode="linear"
            dur="0.8s"
            from="1"
            repeatCount="indefinite"
            to="1"
            values="1;.5;1"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
