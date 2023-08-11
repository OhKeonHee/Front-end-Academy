// 기존 ToDoList - useReducer 없는 버전

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './component/Header';
// import TodoEditor from './component/TodoEditor';
// import TodoList from './component/TodoList';
// import { useState, useRef } from 'react';
// import TestComp from './component/TestComp';

// const mockTodo = [
//   {
//     id: 0,
//     isDone: false,
//     content: "React 공부하기",
//     createdDate: new Date().getTime()
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "빨래 널기",
//     createdDate: new Date().getTime()
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "노래 연습하기",
//     createdDate: new Date().getTime()
//   },
// ]
// function App() {
//   const [todo, setTodo] = useState(mockTodo);
//   const idRef = useRef(3);
//   const onCreate = (content: any) => {
//     const newItem = {
//       id: idRef.current,
//       isDone: false,
//       content,
//       createdDate: new Date().getTime()
//     };
//     setTodo([newItem, ...todo]);
//     idRef.current += 1;
//   };
//   const onUpdate = (targetId: any) => {
//     setTodo(todo.map((it) => {
//       if(it.id === targetId) {
//         return {
//           ...it,
//           isDone: !it.isDone
//         }
//       } else {
//         return it
//       }
//     }))
//   }
//   const onDelete = (targetId: any) => {
//     setTodo(todo.filter((it) => it.id !== targetId));
//   };
//   return (
//     <div className="App">
//       {/* <TestComp /> */}
//       <Header/>
//       <TodoEditor onCreate={onCreate}/>
//       <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
//     </div>
//   );
// }

// export default App;



// 변형 ToDoList - useState를 useReducer로 바꾼 버전
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useState, useRef, useReducer } from 'react';
import useReducer_EX from './component/UseReducer_EX';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime()
  },
]

// 상태변화 함수 선언
const reducer = (state: any, action: any) => {
  switch(action.type) {
    case "CREATE":
      return [action.newItem, ...state];
    case "UPDATE":
      return state.map((it: any) => it.id === action.targetId ? {...it, isDone: !it.isDone} : it)
    case "DELETE":
      return state.filter((it: any) => it.id !== action.targetId)
    default:
      return state;
  }
}

function App() {
  // 👇 const [todo, setTodo] = useState(mockTodo); 
  const [todo, dispatch] = useReducer(reducer, mockTodo)

  const idRef = useRef(3);
  const onCreate = (content: any) => {
    // const newItem = {
    //   id: idRef.current,
    //   isDone: false,
    //   content,
    //   createdDate: new Date().getTime()
    // };
    // setTodo([newItem, ...todo]);  👈🏻 useState버전을 useReducer 버전으로 위에 case "CREATE"
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime()
      }
    })
    idRef.current += 1;
  };
  const onUpdate = (targetId: any) => {
    // setTodo(todo.map((it) => {
    //   if(it.id === targetId) {
    //     return {
    //       ...it,
    //       isDone: !it.isDone
    //     }
    //   } else {
    //     return it
    //   }
    // }))  👈🏻 useState버전을 useReducer 버전으로 위에 case "UPDATE"
    dispatch({
      type: "UPDATE",
      targetId
    })
  }
  const onDelete = (targetId: any) => {
    // setTodo(todo.filter((it) => it.id !== targetId));
    dispatch({
      type: "DELETE",
      targetId
    })
  };
  return (
    <div className="App">
      {/* <UseReducer_EX /> */}
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
