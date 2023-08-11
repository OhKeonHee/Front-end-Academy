import React from 'react'
import { useState, useReducer } from 'react'

// count: state의 변수(값)
// dispatch: 상태변화 촉발 함수
// reducer: 상태변화 함수
// 0: 초기값
// state: 상태변화 최종값
// action: 상태변화 촉발함수에 사용된 객체 = 액션객체

// reducer(state, action)
// const [state의 변수(값), dispatch] = useReducer(reducer, 0)


function reducer(state, action) {
  switch(action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
}
const App = () => {
  // const [count, setCount] = useState(0)
  const [count, dispatch] = useReducer(reducer, 0);
  // const onIncrease = () => {
  //   setCount(count + 1)
  // }
  // const onDecrease = () => {
  //   setCount(count - 1)
  // }
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        {/* <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button> */}
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>+</button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>-</button>
        <button onClick={() => dispatch({ type: "INIT"})}>0으로 초기화</button>
      </div>
    </div>
  )
}

export default App
