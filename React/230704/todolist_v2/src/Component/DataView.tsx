import React from 'react'
import { styled } from 'styled-components'
import Title from './Title'
import TodoList from './TodoList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`
interface Props {
  readonly myList: ReadonlyArray<string>;
  readonly onDelete?: (todo: string) => void
}

const DataView = ({myList, onDelete}: Props) => {
  return (
    <Container>
      <Title label='할 일 목록'/>
      <TodoList myList={myList} onDelete={onDelete}/>
    </Container>
  )
}

export default DataView
