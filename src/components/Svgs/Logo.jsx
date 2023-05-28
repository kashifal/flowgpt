import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="32"
      fill="none"
      viewBox="0 0 37 32"
    >
      <path
        fill="#fff"
        d="M12.198 13.266l10.421-.002 2.383-4.103-19.641.001 9.806 16.931 2.233-3.845-5.202-8.982z"
      ></path>
      <mask
        id="mask0_16_760"
        style={{ maskType: "luminance" }}
        width="31"
        height="8"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M.381.542h29.912V7.88H.381V.542z"></path>
      </mask>
      <g mask="url(#mask0_16_760)">
        <path
          fill="#868686"
          d="M7.215 4.654l20.413-.002L30.01.55.376.55l4.183 7.22h4.462L7.215 4.653z"
        ></path>
      </g>
      <mask
        id="mask1_16_760"
        style={{ maskType: "luminance" }}
        width="22"
        height="32"
        x="15"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M15.937.542h20.306V31.52H15.937V.542z"></path>
      </mask>
      <g mask="url(#mask1_16_760)">
        <path
          fill="#fff"
          d="M31.619.549L15.97 27.485l2.336 4.03L36.238.55h-4.62z"
        ></path>
      </g>
    </svg>
  );
}

export default Logo;