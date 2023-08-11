import { keyframes, styled } from "styled-components";
import Circle from "./Circle";
import { useState } from "react";
import Router from "./Router";

// const Container = styled.div`
//   display: flex;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
//   background-color: ${(props) => props.theme.backgroundColor};
// `
// const Box = styled.div`
//   background-color: ${props => props.bgColor};
//   width: 100px;
//   height: 100px;
// `
// const Circle = styled(Box)` // styled뒤에 ()안에 상속받을 값 써줌
//   border-radius: 50%;
// `

// const Btn = styled.button`
//   background-color: tomato;
//   color: #fff;
//   border: 0;
//   border-radius: 15px;
// `
// const Input = styled.input.attrs({required: true})` // attrs를 사용하면 한 번에 속성 할당 가능
//   background-color: tomato;
// `

// const rotationAnimation = keyframes`
//   0% {
//     transform: rotate(0deg);
//     border-radius: 0px;
//   } 
//   50% {
//     border-radius: 50%;
//   }
//   100% {
//     transform: rotate(360deg);
//     border-radius: 0px;
//   }
// `

// const Emoji = styled.span`
//   font-size: 36px;
// `

// const AniBox = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: tomato;
//   animation: ${rotationAnimation} 1s linear infinite;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   ${Emoji} {

//   }
//   &:hover {
//     font-size: 60px;
//   }
//   &:active {
//     background-color: teal;
//     animation: none;
//   }
// `

// ================ styled.d.ts & theme.tsx
// const Container = styled.div`
//   background-color: ${(props) => props.theme.bgColor};
// `
// const H1 = styled.h1`
//   color: ${(props) => props.theme.textColor}
// `

// interface DummyProps {
//   text: string;
//   active?: boolean;
// }

// function Dummy({ text, active = false }: DummyProps) {
//   return <h1>{text}</h1>
// }

// function App() {

//   // ======================================= useState 타입정의
//   // const [value, setValue] = useState("")
//   // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//   //   const {
//   //     currentTarget: { value },
//   //   } = event;
//   //   setValue(value);
//   // }
//   // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   //   event.preventDefault();
//   // }

//   // ================ styled.d.ts & theme.tsx
//   // const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//   //   alert('Thanks For Click')
//   // }


//   return (
//     // ================ App.js
//     // <Container>
//     //   {/* <Box bgColor='teal' />
//     //   <Circle bgColor='tomato' /> */}

//     //   {/* <Btn>Log in</Btn>
//     //   <Btn as="a" href="/">Log out</Btn> */}

//     //   <AniBox>
//     //     <Emoji>🤮</Emoji>
//     //   </AniBox>
//     //   <Emoji>😍</Emoji>
//     // </Container>
//     // =======================================

//     // <div>
//     //   <Circle borderColor="yellow" bgColor="teal" />
//     //   <Circle text="I'm tomato" bgColor="tomato" />
//     // </div>
//     // =======================================

    
//     // <div>
//     //   <form onSubmit={onSubmit}>
//     //     <input 
//     //       value={value} 
//     //       onChange={onChange} 
//     //       type="text" 
//     //       placeholder="USER NAME" 
//     //     />
//     //     <button>Login</button>
//     //   </form>
//     // </div>
//     // ======================================= useState 타입정의


//     // ================ styled.d.ts & theme.tsx
//     // <Container>
//     //   <H1>styled.d.ts & theme.tsx</H1>
//     //   <Dummy text="hello" active = {true} />
//     //   <button onClick={onClick}>Click Me!!</button>
//     // </Container>

//     // <div>
//     //   <Router />
//     // </div>
//   );
// }

// export default App;

// ============ createBrowserRouter를 사용한 페이지 분기
// App.tsx -> Root.tsx로 파일명 바꿈

import React from 'react'
import { Outlet } from 'react-router-dom'; 
// 부모와 자식요소의 경로값을 실제로 반영시켜주는 컴포넌트
// 없으면 링크바꿔도 페이지 이동안됨
import Header from "./Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Root
