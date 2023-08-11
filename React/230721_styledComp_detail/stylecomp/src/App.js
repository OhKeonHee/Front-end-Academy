// npm install framer-motion
// npm i styled-components

// https://www.framer.com/motion/

import './App.css';
import styled from "styled-components";
import {motion, useMotionValue, useTransform, useViewportScroll, AnimatePresence} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Box = styled(motion.div)`
  // width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background: #fff;
  width: 70px;
  height: 70px;
  place-self: center;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div: first-child, :last-child {
    grid-column: span 2;
  }
`
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const myVars = {
  start: {scale: 0},
  end: {scale: 1, rotateZ: 360, transition: { type: 'spring', delay: 0.5 } }
}
const boxVariants = {
  start: {
    opacity: 0, 
    scale: 0.5
  },
  end: {
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    }
  }
}
const circleVariants = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
  }
}
const testVariants = {
  hover: {
    scale: 2 
  },
  click: {
    scale: 1, borderRadius: '100px'
  }
}

// 애니메이션 효과를 주기위해서 반드시 필요한 개념 : 시작: initial / 끝: animate

// function App() {
//   // const biggerBoxRef = useRef();
//   return (
//     <Wrapper>
//       {/* <motion.h1></motion.h1> */}
// {/* // ========================================================================= */}
//       {/* <Box 
//         transition={{type: 'spring', delay: 0.5}} 
//         initial={{ scale: 0 }} 
//         animate={{ scale: 1, rotateZ: 360 }}
//       /> */}
//       {/* 👇👇👇 */}
//       {/* <Box variants={myVars} initial="start" animate="end" /> */}
// {/* // ========================================================================= */}
//       {/* <Box variants={boxVariants} initial='start' animate='end'>
//         <Circle variants={circleVariants} />
//         <Circle variants={circleVariants} />
//         <Circle variants={circleVariants} />
//         <Circle variants={circleVariants} />
//       </Box> */}
// {/* // ========================================================================= */}
//       {/* <BiggerBox ref={biggerBoxRef}>
//         <Box 
//           drag 
//           dragSnapToOrigin // 정중앙으로 돌아오게 함
//           dragConstraints={biggerBoxRef}
//           variants={testVariants} 
//           whileHover='hover' 
//           whileTap='click' 
//           whileDrag="drag"
//         />
//       </BiggerBox> */}
// {/* // ========================================================================= */}
//     </Wrapper>
//   );
// }

// export default App;

//==========================================================================================

// useMotionValue() : 동적인 모션이 발생되었을 때, 위치값을 저장하는 공간을 생성하고 싶을 때 사용
// useTransform(): 모션 값에 따라 애니메이션을 도출하고 싶을 때 사용
// useViewportScroll():

// function App() {
//   const x = useMotionValue(0);
//   // const motionTest = useTransform(x, [-800, 0, 800], [2, 1, 0.1]) // 앞 배열은 위치, 뒤 배열은 값 
//   // useEffect(() => {
//   //   motionTest.onChange(() => console.log(motionTest.get()))
//   // }, [x])

//   const rotateZ = useTransform(x, [-800, 800], [-360, 360]) // 드래그하면 대굴대굴 굴름
//   const gradient = useTransform(x, [-800, 0, 800], [
//     'linear-gradient(135deg, rgb(0, 210, 238), rgb(0,83,238))',
//     'linear-gradient(135deg, rgb(238, 0, 153), rgb(221,0,238))',
//     'linear-gradient(135deg, rgb(0, 238, 155), rgb(238,178,0))'
//   ])

//   // const {scrollY, scrollYProgress} = useViewportScroll();
//   return (
//     <Wrapper style={{ background: gradient }}>
//       {/* <button onClick={() => x.set(200)}>Click Me!!</button> */}
//       {/* 클릭하면 박스가 200좌표로 set됨(이동) */}
//       <Box style={{ x, rotateZ}} drag='x' dragSnapToOrigin />
//       {/* x좌표로만 드래그 가능 */}
//     </Wrapper>
//   )
// }

// export default App


//==========================================================================================
// 클릭하면 박스가 나타났다 사라졌다 (useState로 toggle)

// function App() {
//   const [showing, setShowing] = useState(false)
//   const toggleShowing = () => {
//     setShowing((prev) => !prev)
//   }
//   return (
//     <Wrapper>
//       <button onClick={toggleShowing}>Click</button>
//       {showing ? <Box /> : null }
//     </Wrapper>
//   )
// }

// export default App

//==========================================================================================
// 박스 클릭하면 모달처럼 앞 정중앙으로 튀어나오고 배경 투명한 검정색으로 됨

function App() {
  const [clicked, setClicked] = useState(false)
  const toggle = () => setClicked((prev) => !prev) // 모달 기능
  return (
    <Wrapper onClick={toggle}>
      <Grid>
        <Box layoutId='hello' />
        <Box />
        <Box />
        <Box />
      </Grid>
      <AnimatePresence>
        {clicked ? 
          <Overlay 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}>
            <Box layoutId='hello' style={{ width: 800, height: 400 }} />
          </Overlay>
          : null}
      </AnimatePresence>
    </Wrapper>
  )
}

export default App
