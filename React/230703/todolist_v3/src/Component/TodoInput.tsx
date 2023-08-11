import React from 'react'
import { styled } from 'styled-components'
import TextInput from './TextInput'
import Button from './Button'
import Title from './Title'
import { useState, useContext } from 'react'
import { TodoListContext } from './TodoListContextProvider'
import { useNavigate } from 'react-router-dom'
import ShowInputButton from './ShowInputButton'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
// const Background = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgba(0, 0, 0, 0.75);
// `
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
// interface Props {
//   readonly onClose: (todo: string) => void;
// }

const TodoInput = () => {
  const navigate = useNavigate();
  const { onAdd } = useContext(TodoListContext);
  const [todo, setTodo] = useState('');
  const onAddTodo = () => {
    if(todo === "") return;

    onAdd(todo);
    setTodo('');
  }
  return (
    <Container>
        <Contents>
          <Title label="할 일 추가" />
          <InputContainer>
            <TextInput value={todo} onChange={setTodo} />
            <Button label="추가" onClick={onAddTodo} color='#304ffe' />
          </InputContainer>
        </Contents>
        <ShowInputButton show={true} onClick={() => navigate('/')} />
    </Container>
    
  )
}

export default TodoInput
