import React from 'react';
import './App.css';
import { styled } from 'styled-components'
import { useState } from 'react'
import Button from './Component/Button';
import DataView from './Component/DataView';
import TodoInput from './Component/TodoInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
`

function App() {
  const [myList, setMyList] = useState([
    '리액트 공부하기',
    '데이트하기',
    '게임하기'
  ])
  const [input, setInput] = useState("");
  const onDelete = (todo: string) => {
    setMyList(myList.filter((item) => item !== todo))
  }

  const onAdd = (todo: string) => {
    if(todo === "") return

    setMyList([...myList, todo]);
    setInput("")
  }
  
  const [btnLabel, setBtnLabel] = useState(false);
  const onBtnLabelClick = () => {
    setBtnLabel(true)
  }

  return (
    <Container>
      <DataView myList={myList} onDelete={onDelete}/>
      <TodoInput onAdd={onAdd}/>
      <Button label={}/>
    </Container>
  );
}

export default App;
