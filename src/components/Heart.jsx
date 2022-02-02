import React from "react";
import {motion, useAnimation, useMotionValue, useTransform} from "framer-motion";

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}

const Heart = ({heart, removeHeart}) => {


  const controls = useAnimation();

  const animationEndY = Math.ceil(-600 * 0.7);
  const negativeEndY = animationEndY * -1;


  const heartPosition = useMotionValue(0);

  const heartOpacity = useMotionValue(0)

  const heartScale = useMotionValue(0);

  const yAnimation = useTransform(heartPosition, [negativeEndY, 0], [animationEndY, 0]);


  const opacity = useTransform(heartPosition, [0, animationEndY], [1, 0]);
  const scale = useTransform(heartPosition, [0, -15, -30], [0, 1.4, 1]);
  const xAnimation = useTransform(heartPosition, [0, animationEndY/6, animationEndY/3, animationEndY/2, -400], [0, 25, 15, 0, 10]);
  const rotate = useTransform(heartPosition, [0, animationEndY/6, animationEndY/3, animationEndY/2, -400], ['0deg', '-5deg', '0deg', '5deg', '0deg'])




  return (
    <motion.svg
      style={{
        position: 'absolute',
        right: heart.right,
        y: heartPosition,
        scale,
        opacity,
        x: xAnimation,
        rotate
        // y: yAnimation,
        // opacity,
        // scale
        // opacity,
        // scale
        // y: yAnimation
      }}
      animate={{
        y: [0, animationEndY]
      }}
      transition={{
        duration: 2
      }}
      // animate={controls}


      onAnimationComplete={() => removeHeart(heart.id)}

      width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7908 3.96503C13.3273 0.375285 8.45721 -0.701688 4.69259 1.589C0.796171 3.95987 -0.440522 9.04052 1.93035 12.9369L8.83959 24.2919C9.62989 25.5907 11.3234 26.0029 12.6222 25.2127L23.9772 18.3034C27.8736 15.9325 29.1103 10.8519 26.7395 6.95549C24.4488 3.19086 19.6285 1.90908 15.7908 3.96503Z"
            fill="url(#paint0_radial_847_4736)"/>
      <defs>
        <radialGradient id="paint0_radial_847_4736" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(3.93228 -5.5149) rotate(65.3051) scale(36.4902 37.8187)">
          <stop stop-color="#FF8C68"/>
          <stop offset="0.577639" stop-color="#FF7AF2"/>
          <stop offset="1" stop-color="#F42BD4"/>
        </radialGradient>
      </defs>
    </motion.svg>
  );
};

export default Heart;
