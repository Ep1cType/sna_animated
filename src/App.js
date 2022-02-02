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

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const postWidth = useRef(null);

  const controls = useAnimation();

  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 0, 200], [0.7, 0.1, 0.7]);
  const rotate = useMotionValue(0);
  const [animation, animate] = useCycle();
  console.log(x);

  const [disable, setDisable] = useState(true);

  const rot = {
    rotate: [20, -20, 20, -20, 0],
    x: -150
  };

  useEffect(() => {

    x.onChange(latest => {
      // console.log(latest)
    });
  }, []);

  return (
    <>
      {/*<button style={{position: "absolute", left: "1500px", top: "1000px"}} onClick={() => setIsOpen(!isOpen)}>Open*/}
      {/*</button>*/}
      <div className={s.App}>


        {/*<Animation />*/}


        <motion.div ref={postWidth} style={{
          border: "2px solid black",
          height: "300px",
          width: "100%",
          overflow: "hidden",
        }}>
          <motion.div style={{width: "100%", height: "100%", position: "relative", display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <motion.button
              initial={{
                scale: 0.1
              }}
              animate={controls}
              style={{
                padding: 0,
                border: "none",
                font: "inherit",
                color: "inherit",
                backgroundColor: "transparent",
                right: "-58px",
                position: 'absolute',
                scale,
                x,
              }}
              dragSnapToOrigin
              drag={"x"}
              dragElastic={1}
              dragTransition={{bounceStiffness: 500}}
              onDragEnd={() => {
                // if (x.get() < -20) {
                if (x.get() < -(postWidth.current.clientWidth / 4)) {

                  console.log(postWidth.current.clientWidth)

                  console.log("GO");
                  controls.start(rot)
                    .then(() => {
                      setDisable(false);
                    })
                    .catch(() => {
                      setDisable(false);
                    });
                }
              }}
              onClick={() => console.log("click")}
              disabled={disable}
            >
              <motion.svg
                width="120" height="121" viewBox="0 0 120 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60.1333" r="60" fill="#6179F8"/>
                <circle cx="60" cy="60.1333" r="43" stroke="white" stroke-width="11"/>
                <path
                  d="M65.5001 33.8328C65.5001 30.7952 63.0377 28.3328 60.0001 28.3328C56.9626 28.3328 54.5001 30.7952 54.5001 33.8328H65.5001ZM54.5001 86.1741C54.5001 89.2117 56.9626 91.6741 60.0001 91.6741C63.0377 91.6741 65.5001 89.2117 65.5001 86.1741H54.5001ZM51.9167 65.5034H68.0835V54.5034H51.9167V65.5034ZM66.9033 34.1485H60.0001V45.1485H66.9033V34.1485ZM60.0001 34.1485H51.9167V45.1485H60.0001V34.1485ZM65.5001 39.6485V33.8328H54.5001V39.6485H65.5001ZM68.0835 74.8584H60.0001V85.8584H68.0835V74.8584ZM60.0001 74.8584H53.0969V85.8584H60.0001V74.8584ZM54.5001 80.3584V86.1741H65.5001V80.3584H54.5001ZM36.8963 76.1803C40.1048 82.1411 46.3275 85.8584 53.0969 85.8584V74.8584C50.3747 74.8584 47.8725 73.3636 46.5822 70.9666L36.8963 76.1803ZM72.761 70.1809C72.761 72.7642 70.6668 74.8584 68.0835 74.8584V85.8584C76.7419 85.8584 83.761 78.8394 83.761 70.1809H72.761ZM68.0835 65.5034C70.6668 65.5034 72.761 67.5976 72.761 70.1809H83.761C83.761 61.5225 76.7419 54.5034 68.0835 54.5034V65.5034ZM36.2393 49.826C36.2393 58.4844 43.2583 65.5034 51.9167 65.5034V54.5034C49.3334 54.5034 47.2393 52.4093 47.2393 49.826H36.2393ZM47.2393 49.826C47.2393 47.2427 49.3334 45.1485 51.9167 45.1485V34.1485C43.2583 34.1485 36.2393 41.1675 36.2393 49.826H47.2393ZM83.104 43.8266C79.8954 37.8658 73.6728 34.1485 66.9033 34.1485V45.1485C69.6255 45.1485 72.1278 46.6433 73.418 49.0403L83.104 43.8266Z"
                  fill="white"/>
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>


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
