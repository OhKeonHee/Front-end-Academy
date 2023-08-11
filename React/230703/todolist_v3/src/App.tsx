import React, { useRef } from 'react';
import './App.css';
import { styled } from 'styled-components'
import Title from './Components/Title';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import DataView from './Components/DataView';
import { useState } from 'react';
import TextInput from './Components/TextInput';
import Button from './Components/Button';
import TodoInput from './Components/TodoInput';
import ShowInputButton from './Components/ShowInputButton';
import InputContainer from './Components/InputContainer';
import { TodoListContextProvider } from './Components/TodoListContextProvider';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
`;

function App() {
  const [todoList, setTodoList] = useState([
    "리액트 공부하기",
    "운동하기",
    "책 읽기",
  ]);
  // const [todo, setTodo] = useState('');
  // const [showTodoInput, setShowTodoInput] = useState(false);
  const onDelete = (todo: string) => {
    setTodoList(todoList.filter((item) => item !== todo))
  }
  const onAdd = (todo: string) => {
    if(todo === "") return;

    setTodoList([...todoList, todo]);
    // setTodo('');
  }

  return (
    <Container>
      <TodoListContextProvider>
        {/* <DataView todoList={todoList} onDelete={onDelete} /> */}
        {/* <TodoInput onAdd={onAdd} /> */}
        {/* {showTodoInput && <TodoInput onAdd={onAdd} />} */}
        {/* <TextInput value={todo} onChange={setTodo} />
        <Button label="추가" onClick={onAdd} color="#304ffe" /> */}
        {/* <ShowInputButton show={showTodoInput} onClick={() => setShowTodoInput(!showTodoInput)} /> */}

        <Header />
        <Routes>
          <Route
            path="/"
            element={<DataView />}
          />
          <Route path='/add' element={<TodoInput />} />
          <Route
          path='*'
          element={
            <>
              404
              <br />
              Not Found
            </>
          } />
        </Routes>
      </TodoListContextProvider>
    </Container>
  )
}

export default App;
