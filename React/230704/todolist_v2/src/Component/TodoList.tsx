import React from 'react'
import { styled } from 'styled-components'
import TodoItem from './TodoItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface Props {
  readonly myList: ReadonlyArray<string>;
  readonly onDelete?: (todo: string) => void;
}

const TodoList = ({myList, onDelete}: Props) => {
  return (
    <Container>
      {myList.map((todo) => (
      <TodoItem 
        label={todo} 
        key={todo} 
        onDelete={() => {
          if(typeof onDelete === "function") onDelete(todo);
        }}/>
      ))}
    </Container>
  )
}

export default TodoList
