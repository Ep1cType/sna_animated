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

function App() {
  const [isOpen, setIsOpen] = useState(false);





  return (
    <>
      {/*<button style={{position: "absolute", left: "1500px", top: "1000px"}} onClick={() => setIsOpen(!isOpen)}>Open*/}
      {/*</button>*/}
      <div className={s.App}>


        {/*<Animation />*/}


        <Coin />


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
