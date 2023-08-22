import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { toDoState } from './Atoms';
import DraggableCard from './Components/DraggableCard';
import Board from './Board';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: any) => {
    const { destination, draggableId, source } = info;
    console.log(info)
    if (!destination) return;
    // ↑ 보드 밖으로 드래그 시 예외처리
    if(destination.droppableId === source.droppableId) {
      // 같은 보드에서 움직이는 경우
      setToDos((oldToDos) => {
        const copyToDos = [...oldToDos[source.droppableId]];
        const taskObj = copyToDos[source.index];
        copyToDos.splice(source.index, 1);
        copyToDos.splice(destination?.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: copyToDos,
        };
      })
    }
    if(destination.droppableId !== source.droppableId) {
      // 서로 다른 보드에서 움직이는 경우
      setToDos((oldToDos) => {
        const sourceBoard = [...oldToDos[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...oldToDos[destination.droppableId]];
        // 1) source 아이템요소 잘라내기
        sourceBoard.splice(source.index, 1);
        // 2) destination 도착지점에 붙여넣기
        destinationBoard.splice(destination?.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard
        };
      })
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;