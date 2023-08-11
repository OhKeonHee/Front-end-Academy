import React from 'react'
import { useReducer } from 'react'

// 컴포넌트 밖에 함수 쓰기!!
function reducer (state, action) {
  switch(action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data
    case "RESET":
      return 0;
    default:
      return state;
  }
}


const UseReducerTest = () => {
  // useReducer 함수는 컴포넌트 안에 작성!!
  const [count, dispatch] = useReducer(reducer, 0);
  // reducer: 상태변화 함수 // 0: 초기값
  // count: State변수 // dispatch: 상태변화 촉발함수 = action Creator함수
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={() => dispatch({type: "INCREASE", data: 1})}>+</button>
        <button onClick={() => dispatch({type: "DECREASE", data: 1})}>-</button>
        <button onClick={() => dispatch({type: "RESET"})}>초기화</button>
      </div>
    </div>
  )
}

export default UseReducerTest
