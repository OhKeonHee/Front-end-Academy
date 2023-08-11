import React from "react";
import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoListContext } from './TodoListContextProvider'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  readonly todoList: ReadonlyArray<string>; //읽기 전용 배열
  readonly onDelete?: (todo: string) => void;
}

const TodoList = () => {
  const { todoList, onDelete } = useContext(TodoListContext);
  return (
    <Container>
      {todoList.map((todo) => (
        <TodoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;