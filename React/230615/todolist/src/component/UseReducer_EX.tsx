// useState()의 단점은 컴포넌트 밖에서 사용할 수 없음!
// useReducer함수 사용방법
// useReducer()는 상태 변화 코드를 분리시켜서 사용할 수 있는 리액트 훅 기능 중 하나!!
// - 장점 : 컴포넌트 밖으로 꺼내서 사용! 
// const [count, dispatch] = useReducer(reducer, 0)
// reducer: 상태변화 함수
// reducer(state, action) -> 2개의 인자값을 가짐
// dispatch: 상태변화 촉발함수

import { useState, useReducer } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data
    case "INIT":
      return 0;
    default:
      return state
  }
}

const useReducer_EX = () => {
  // const [count, setCount] = useState(0);
  // const onIncrease = () => {
  //   setCount(count + 1);
  // }
  // const onDecrease = () => {
  //   setCount(count - 1);
  // }

  const [count, dispatch] = useReducer(reducer, 0)

  return (
  <div>
    <h4>테스트 컴포넌트</h4>
    <div>
    <h2>{count}</h2>
    </div>
    <div>
      <button onClick={() => dispatch({type: "INCREASE", data: 1})}>+</button>
      <button onClick={() => dispatch({type: "INIT"})}>0으로 초기화</button>
      <button onClick={() => dispatch({type: "DECREASE", data: 1})}>-</button>
    </div>
  </div>

  )
}

export default useReducer_EX;