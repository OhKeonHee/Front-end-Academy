import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`

const boxVariants = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  leaving: {
    x: -500,
    opacity: 0,
    scale: 0,
  },
}


function App_0823() {
  // const [showing, setShowing] = useState(false)
  // const toggle = () => setShowing((prev) => !prev);

  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1))
  return (
    // <Wrapper>
    //   <button onClick={toggle}>Click</button>
    //   <AnimatePresence>
    //     {showing ? 
    //       <Box 
    //         variants={BoxVariants} 
    //         initial='initial'
    //         animate='visible'
    //         exit='leaving' 
    //       /> : null
    //     }
    //   </AnimatePresence>
    // </Wrapper>

    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i=== visible ? 
          <Box variants={boxVariants} key={i}>{i}</Box> : null
        )}
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App_0823
