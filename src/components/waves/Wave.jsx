import React from "react";
import {motion} from "framer-motion";
import s from "./Wave.module.scss";

const Wave = ({animate, transition}) => {
  return (
    <motion.svg
      className={s.wave}
      initial={{
        scale: 0
      }}
      animate={animate}
      transition={transition}
    >
      <g filter="url(#filter0_i_376_8782)">
        <circle fill='none' cx="57" cy="57" r="50" stroke="#ffffff" strokeWidth="14"/>
      </g>
      <defs>
        <filter id="filter0_i_376_8782" x="0" y="0" width="114" height="118" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_376_8782"/>
        </filter>
        <linearGradient id="paint0_linear_376_8782" x1="57" y1="0" x2="57" y2="114" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white"/>
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default Wave;
