import React from "react";
import {useMotionValue, useTransform, motion} from "framer-motion";

const MiniCoin = ({removeCoin, coin}) => {
  const animationEndY = Math.ceil(-600*0.7);

  const coinPosition = useMotionValue(0);

  const opacity = useTransform(coinPosition, [0, animationEndY/2, animationEndY], [1, 1, 0]);
  const scale = useTransform(coinPosition, [0, -15, -30], [0, 1.4, 1]);
  const xAnimation = useTransform(coinPosition, [0, animationEndY/6, animationEndY/3, animationEndY/2, -400], [0, 25, 15, 0, 10]);


  return (
    <motion.svg
      style={{
        position: 'absolute',
        right: coin.right,
        zIndex: -1,
        y: coinPosition,
        scale,
        opacity,
        x: xAnimation,
      }}

      animate={{y: [0, animationEndY]}}
      transition={{duration: 2}}
      onAnimationComplete={() => removeCoin(coin.id)}


      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17.8704" cy="17.0046" r="13.5581" transform="rotate(17.436 17.8704 17.0046)"
              fill="url(#paint0_radial_847_4159)"/>
      <g clip-path="url(#clip0_847_4159)">
        <circle cx="17.8706" cy="17.0048" r="7.25304" transform="rotate(17.436 17.8706 17.0048)" stroke="white"
                stroke-width="1.45061"/>
        <path
          d="M19.8665 13.0702C19.9865 12.6881 19.774 12.281 19.3919 12.1609C19.0097 12.0409 18.6026 12.2534 18.4825 12.6356L19.8665 13.0702ZM15.8746 20.9393C15.7546 21.3215 15.9671 21.7286 16.3492 21.8486C16.7314 21.9686 17.1385 21.7561 17.2585 21.374L15.8746 20.9393ZM16.4999 17.3345L18.8065 18.059L19.2412 16.675L16.9346 15.9506L16.4999 17.3345ZM20.106 13.3989L19.1021 13.0836L18.6674 14.4675L19.6713 14.7828L20.106 13.3989ZM19.1021 13.0836L17.9488 12.7213L17.5141 14.1053L18.6674 14.4675L19.1021 13.0836ZM19.5767 13.9929L19.8665 13.0702L18.4825 12.6356L18.1928 13.5582L19.5767 13.9929ZM18.227 19.9042L17.0737 19.542L16.639 20.926L17.7923 21.2882L18.227 19.9042ZM17.0737 19.542L16.0698 19.2267L15.6351 20.6107L16.639 20.926L17.0737 19.542ZM16.1644 20.0167L15.8746 20.9393L17.2585 21.374L17.5483 20.4513L16.1644 20.0167ZM13.7117 18.4115C13.8902 19.447 14.6326 20.2958 15.6351 20.6107L16.0698 19.2267C15.5858 19.0747 15.2274 18.6649 15.1413 18.1651L13.7117 18.4115ZM19.4394 19.2714C19.2793 19.7809 18.7365 20.0643 18.227 19.9042L17.7923 21.2882C19.0662 21.6883 20.4232 20.9799 20.8233 19.706L19.4394 19.2714ZM18.8065 18.059C19.3161 18.219 19.5994 18.7618 19.4394 19.2714L20.8233 19.706C21.2234 18.4321 20.5151 17.0751 19.2412 16.675L18.8065 18.059ZM14.9178 14.3035C14.5177 15.5774 15.226 16.9344 16.4999 17.3345L16.9346 15.9506C16.425 15.7905 16.1417 15.2477 16.3017 14.7382L14.9178 14.3035ZM16.3017 14.7382C16.4618 14.2286 17.0046 13.9453 17.5141 14.1053L17.9488 12.7213C16.6749 12.3213 15.3179 13.0296 14.9178 14.3035L16.3017 14.7382ZM22.0294 15.5981C21.8509 14.5626 21.1085 13.7137 20.106 13.3989L19.6713 14.7828C20.1553 14.9348 20.5137 15.3446 20.5998 15.8445L22.0294 15.5981Z"
          fill="white"/>
      </g>
      <defs>
        <radialGradient id="paint0_radial_847_4159" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(9.39658 5.98858) rotate(54.9638) scale(30.0127)">
          <stop stop-color="#61B8F8"/>
          <stop offset="0.505208" stop-color="#6179F8"/>
          <stop offset="1" stop-color="#4E61C6"/>
        </radialGradient>
        <clipPath id="clip0_847_4159">
          <rect width="17.4073" height="17.4073" fill="white" transform="translate(12.1748 6.09308) rotate(17.436)"/>
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default MiniCoin;
