import React from "react";

function BgBar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="71"
      height="1024"
      fill="none"
      className="absolute top-96 left-12 -z-10 bg-red-500"
      viewBox="0 0 71 1024"
    >
      <g filter="url(#filter0_bd_16_772)">
        <path
          fill="#1A1B1E"
          fillOpacity="0.5"
          d="M59.62 0H71v1024H59.62V709.154a44 44 0 00-9.767-27.643l-39.086-48.403A44 44 0 011 605.465V144.366a44 44 0 019.767-27.643L49.853 68.32a44 44 0 009.768-27.643V0z"
          shapeRendering="crispEdges"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_bd_16_772"
          width="130"
          height="1084"
          x="-29"
          y="-30"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="15"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_16_772"
          ></feComposite>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-1"></feOffset>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="effect1_backgroundBlur_16_772"
            result="effect2_dropShadow_16_772"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_16_772"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default BgBar;