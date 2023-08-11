import { useRef, useState, useReducer } from 'react';
import './App.css';
import Header from './Components/Header';
import TodoEditor from './Components/TodoEditor';
import TodoList from './Components/TodoList';
import UseReducerTest from './Components/UseReducerTest';

// 1.1 TodoEditor를 통해서 Todo값이 신규로 생성
// 1.2 TodoEditor를 통해서 입력된 값이 어떤 공간에 저장됨
// 1.3 저장된 공간에 있는 텍스트 요소 가져오기
// --> 1.1 ~ 1.3을 해결하기 위해 useState() 사용
// 2. TodoEditor 추가 버튼을 클릭했을 때, TotoList영역에 값이 출력되어야 함
// 3. TodoList에 출력된 item값을 검색할 수 있어야함
// 4. 각 TodoItem 우측 "삭제버튼" 클릭 시, 실제 아이템들이 삭제가 되어야함



function reducer(state, action) {
  switch(action.type) {
    case "CREATE": {
      return [action.newItem, ...state]
    }
    case "UPDATE": {
      return state.map((it) => it.id === action.targetId ? {...it, isDone: !it.isDone} : it)
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId)
    }
    default:
      return state;
  }
}


function App() {
  const mockTodo = [
    {
      id: 0,
      inDone: false, // 체크박스
      content: 'React 공부하기', // 할 일
      createdDate: new Date().getTime() // 시간
    },
    {
      id: 1,
      inDone: false,
      content: '설거지하기',
      createdDate: new Date().getTime()
    },
    {
      id: 2,
      inDone: false,
      content: '데이트하기',
      createdDate: new Date().getTime()
    }
  ]
  // const [todo, setTodo] = useState(mockTodo);
  // 체크박스, 할일, 날짜같은 여러객체가 들어가기 때문에 배열로 지정해야함
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);
  // useRef 인자값은 해당 변수의 값으로 할당 가능

  
  
  const onCreate = (content) => { 
    // 추가버튼을 눌렀을 때 todo에 넣어주는 함수 생성
    // 사용자가 입력한 값인 content를 인자값으로 넣어줌
    // const newItem = {
    //   id: idRef.current,
    //   content,
    //   isDone: false,
    //   createdDate: new Date().getTime()
    // };
    // setTodo([newItem, ...todo])


    // useState -> useReducer로 바꾸기
    dispatch({ 
      type: "CREATE", newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime()
      }
    })
    idRef.current += 1
  }

  
  const onUpdate = (targetId) => {
    // setTodo(todo.map((it) => (
    //   it.id === targetId ? {...it, isDone: !it.isDone} : it
    // )))
    dispatch({
      type: "UPDATE",
      targetId,
    })
  }

  const onDelete = (targetId) => {
    // setTodo(todo.filter((it) => it.id !== targetId))
    dispatch({
      type: "DELETE",
      targetId,
    })
  }

  return (
    <div className="App">
      {/* <UseReducerTest /> */}
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
