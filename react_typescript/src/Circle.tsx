import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border: 10px solid ${props => props.borderColor};
`

interface ContainerProps {
  bgColor: string;
  borderColor: string; // Container는 받아오던 말던 무조건 값을 가지고 있어야함
}

interface CircleProps {
  bgColor: string;
  borderColor?: string; // 값을 받아오는 cicle에겐 선택적 프로퍼티 부여
  text?: string;
}

const Circle = ({ bgColor, borderColor, text = "default text" }: CircleProps) => {
  // props에 직접 값을 부여한 경우 props에 전달된 값이 없으면 입력한 값을 출력
  // const [counter, setCounter] = useState<number | string | boolean>(1);
  // setCounter('Hello')
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  )
}

export default Circle

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old`;
sayHello({name: 'Oh', age: 24});
sayHello({name: 'Kim', age: 22});