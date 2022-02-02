import React, {useState} from "react";
import "./Animation.css";

import {motion, useMotionValue} from "framer-motion";
import pulse from "./pulse.svg";
import heart from "./heart.svg";
import qwe from "./qwe.svg";
import {useSpring, animated, config} from "react-spring";

const Animation = () => {
  const [count, setCount] = useState(false);



  return (
    <div className='example-container'>
      <div className='anim'>
        <img className='heart' alt='' src={heart} />
        {/*<img className='pulse' alt="" src={pulse} />*/}
        {/*<div className='back' />*/}
        <div className='pulse'>
          {/*<motion.svg*/}
          {/*  animate={*/}
          {/*    {scale: [0, 5]}*/}
          {/*  } transition={*/}
          {/*  {delay: 0.6, duration: 5, repeat: Infinity}*/}
          {/*}*/}
          {/*>*/}
          {/*  <motion.circle fill="none" cx="57" cy="57" r="50" stroke="#6179F8" strokeOpacity="0.46" strokeWidth="14"/>*/}
          {/*</motion.svg>*/}

          <svg xmlns="http://www.w3.org/2000/svg" height="21" width="81" viewBox="0 -11 81 21">
            <path
              className="path"
              fill="transparent"
              stroke="white"
              d="M 0 0 L 42 0 L 47 -10 L 53 9 L 64 -7 L 66 0 L 79 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Animation;
