import React from "react";

function MessageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_134_123)" filter="url(#filter0_d_134_123)">
        <path
          fill="#000"
          d="M2.5 10.833h5V9.167h-5V1.538a.417.417 0 01.618-.365l15.385 8.462a.416.416 0 010 .73L3.117 18.827a.417.417 0 01-.617-.365v-7.629z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_134_123"
          width="24.218"
          height="25.757"
          x="-1.5"
          y="1.122"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_134_123"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_134_123"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_134_123">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default MessageIcon;