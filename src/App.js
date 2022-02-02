import Animation from "./components/Animation";
import plug from "./plug.svg";

import {motion, AnimatePresence, useMotionValue, useTransform, useCycle, useAnimation} from "framer-motion";
import s from "./App.module.scss";
import {animated, useSpring} from "react-spring";
import {useEffect, useRef, useState} from "react";
import rect from "./rect.svg";
import qqq from "./qqq.svg";
import Convert from "./components/Convert/Convert";
import Wave from "./components/waves/Wave";
import AnimatedConvert from "./components/AnimatedConvert";
import Coin from "./components/Coin";
import Heart from "./components/Heart";

let heartCount = 1;




const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [hearts, setHearts] = useState([]);




  const addHeart = () => {
    setHearts(prevState => [...prevState, {
      id: heartCount,
      right: getRandomNumber(10, 20)
    }])
    heartCount++;
  }

  const removeHeart = (id) => {
    setHearts(prevState => [...prevState.filter(heart => heart.id !== id)])
  }





  return (
    <>
      <button style={{position: "absolute"}} onClick={() => setIsOpen(!isOpen)}>Open
      </button>
      <div className={s.App}>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          display: 'flex',
        }}>
          <button onClick={() => addHeart()} >
            fa
          </button>
          <div
            style={{
              position: 'absolute',
              left: 200
            }}
          >
            {!!hearts.length &&
              hearts.map((heart) => {
                return (
                  <Heart removeHeart={removeHeart} key={heart.id} heart={heart}
                  />
                )
              })

            }


          </div>
        </div>


        {/*<Animation />*/}


        {/*<Coin />*/}


        {/*{!isOpen && <Convert />}*/}
        {/*{isOpen &&*/}
        {/*  <AnimatedConvert />*/}
        {/*}*/}


        {/*<motion.div*/}
        {/*  className={s.box}*/}
        {/*  style={{ x }}*/}
        {/*  drag="x"*/}
        {/*  dragConstraints={{ left: 0, right: 0 }}*/}
        {/*>*/}

        {/*</motion.div>*/}
      </div>
    </>
  );
}

export default App;
