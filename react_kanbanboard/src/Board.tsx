import React, { useRef } from 'react'
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd'
import DraggableCard from './Components/DraggableCard';
import { useForm } from 'react-hook-form'
import { ITodo, toDoState } from './Atoms';
import { useSetRecoilState } from 'recoil';

const Wrapper = styled.div`
  width: 300px;
  padding: 10px 0px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boarderColor};
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) => (props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? '#b2bec3' : props.theme.boarderColor)};
  flex-grow: 1;
  transition: background-color .3s ease-in-out;
  padding: 20px;
`

const Form = styled.form`
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-bottom: 5px solid #74b9ff;
`

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}
const Board = ({ toDos, boardId }: IBoardProps) => {
  // const inputRef = useRef<HTMLInputElement>(null) // -> 쿼리셀렉터나 겟 대신 쓸수있는 useRef()
  // const onClick = () => {
  //   inputRef.current?.focus();
  //   setTimeout(() => {
  //     inputRef.current?.blur();
  //   }, 5000)
  // }

  const setToDos = useSetRecoilState(toDoState) // Atoms함수를 수정하는 함수

  interface IForm {
    toDo: string;
  }
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newTodo],
      }
    })
    setValue("toDo", '');
  }
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      {/* <input ref={inputRef} placeholder='Grap Me!' />
      <button onClick={onClick}>Click Me!</button> */}

      <Form onSubmit={handleSubmit(onValid)}>
        <Input {...register("toDo", { required: true })} type='text' placeholder={`Add task on ${boardId}`} />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area 
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo.id} toDoId={toDo.id} toDoText={toDo.text} index={index} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  )
}

export default Board
