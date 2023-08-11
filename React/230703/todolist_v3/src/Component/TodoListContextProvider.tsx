import React from 'react'
import { createContext, useState } from 'react'

interface Context {
  readonly todoList: string[];
  readonly onAdd: (todo: string) => void;
  readonly onDelete: (todo: string) => void;
}

const TodoListContext = createContext<Context>({ todoList: [], onAdd: (): void => {}, onDelete: (): void => {} });

interface Props {
  children: JSX.Element | JSX.Element[];
  // JSX or JSX 배열 타입
}

const TodoListContextProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState([
    "리액트 공부하기",
    "운동하기",
    "책 읽기",
  ]);
  const onAdd = (todo: string) => {
    if(todo === "") return;

    setTodoList([...todoList, todo]);
  };
  const onDelete = (todo: string) => {
    setTodoList(todoList.filter((item) => item !== todo))
  }
  return (
    <TodoListContext.Provider value={{ todoList, onAdd, onDelete }}>
      {children}
    </TodoListContext.Provider>
  )
}

export {TodoListContextProvider, TodoListContext};
