import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360 },
//   transition: { type: 'spring', delay: 2 }
// }

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  place-self: center;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`

// const BoxVariants = {
//   start: {
//     opacity: 0,
//     scale: .5,
//   },
//   end: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: 'spring',
//       bounce: .5,
//       duration: .5,
//       delayChildren: .5,
//       staggerChildren: .5
//     }
//   },
// }

// const CircleVariants = {
//   start: { opacity: 0, y: -200},
//   end: {
//     opacity: 1,
//     y: 0
//     // transition: {
//     //   delay: 2,
//     // }
//   },
// }

const BoxVariants = {
  hover: { scale: 1, rotateZ: 90 },
  click: { borderRadius: '50%' },
  drag: { backgroundColor: 'rgb(46, 114, 134)' }
}

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: #fff;
    stroke-width: 2;
  }
`


function App() {
  // const BiggerBoxRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const active = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x, 
    [-800, 0, 800], 
    [
      'linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))',
      'linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))',
      'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))'
    ])
  
  const { scrollY, scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  // useEffect(() => {
  //   scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()))
  // }, [scrollY, scrollYProgress])

  const svg = {
    start: { pathLength: 0, fill: 'rgba(255, 255, 255, 0)' },
    end: { 
      pathLength: 1, 
      fill: 'rgba(255, 255, 255, 1)',
      transition: { duration: 3 },
    }
  }
  return (
    <Wrapper style={{ background: gradient }}>
      {/* <Box 
        variants={myVars}
        initial="start"
        animate="end"
      /> */}

      {/* <Box variants={BoxVariants} initial="start" animate='end'>
        <Circle variants={CircleVariants} />
        <Circle variants={CircleVariants} />
        <Circle variants={CircleVariants} />
        <Circle variants={CircleVariants} />
      </Box> */}

      {/* <Box whileHover={{ scale: 1.5, rotateZ: 90 }} whileTap={{ borderRadius: '50%' }} /> */}

      {/* <Box 
        drag 
        dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
        variants={BoxVariants} 
        whileHover="hover" 
        whileTap="click" 
        whileDrag="drag" 
      /> */}

      {/* <BiggerBox ref={BiggerBoxRef}>
        <Box 
          drag 
          dragElastic={1}
          dragSnapToOrigin
          dragConstraints={BiggerBoxRef}
          variants={BoxVariants} 
          whileHover="hover" 
          whileTap="click" 
          whileDrag="drag" 
        />
      </BiggerBox> */}

      {/* <Box style={{ x, rotateZ, scale }} drag='x' dragSnapToOrigin /> */}

      <Svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <motion.path 
          variants={svg}
          initial="start"
          animate="end"
          transition={{ default: { duration: 5 }, fill: { duration: 2, delay: 5 } }}
          fill='currentColor' d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"/>
      </Svg>
    </Wrapper>
  );
}

export default App;
