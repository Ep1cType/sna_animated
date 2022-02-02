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
import MiniCoin from "./components/MiniCoin";

let heartCount = 1;
let coinCount = 1;


const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [hearts, setHearts] = useState([]);
  const [coins, setCoins] = useState([]);




  const addHeart = () => {
    setHearts(prevState => [...prevState, {
      id: heartCount,
      right: getRandomNumber(10, 30)
    }])
    heartCount++;
  };

  const removeHeart = (id) => {
    setHearts(prevState => [...prevState.filter(heart => heart.id !== id)])
  };

  const addCoin = () => {
    setCoins(prevState => [...prevState, {
      id: coinCount,
      right: getRandomNumber(-10, 10)
    }])
    coinCount++;
  }

  const removeCoin = (id) => {
    setCoins(prevState => [...prevState.filter(heart => heart.id !== id)])
  };

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
            <button className={s.apple} style={{height: '40px', width: '40px', borderRadius: '50%', zIndex: 5}} onClick={() => addHeart()} >
              fa
            </button>
            <div
              style={{

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
        <div style={{marginLeft: '100px', position: 'absolute', bottom: 50}}>
          <button className={s.apple} style={{width: '40px', height: '40px', borderRadius: '50%', zIndex: 5}} onClick={() => addCoin()} >
            Click
          </button>
          {!!coins.length &&
            coins.map((coin) => {
              return (
                <MiniCoin
                  key={coin.id}
                  coin={coin}
                  removeCoin={removeCoin}
                />
              )
            })
          }
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
