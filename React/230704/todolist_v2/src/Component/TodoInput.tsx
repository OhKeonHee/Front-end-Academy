import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import TextInput from './TextInput'
import Title from './Title'
import Button from './Button'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
`
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

interface Props {
  readonly onAdd: (todo: string) => void;
}

const TodoInput = ({onAdd}: Props) => {
  const [TODO, setTODO] = useState("")
  const onAddTodo = () => { // 알쏭달쏭 할 수 있으나 이 함수는 onAdd와 달리 input태그의 value값에 대한 함수
    if(TODO === "") return

    onAdd(TODO); // 실제로 myList에 추가해주는 함수호출
    setTODO("");
  }
  return (
    <Container>
      <Background>
        <Contents>
          <Title label="할 일 추가" />
          <InputContainer>
            <TextInput value={TODO} onChange={setTODO}/>
            <Button label="추가" onClick={onAddTodo}/>
          </InputContainer>
        </Contents>
      </Background>
    </Container>
  )
}

export default TodoInput
