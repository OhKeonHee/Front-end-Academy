// npm install redux
// npm install react-redux
// https://react-redux.js.org/introduction/getting-started


// === 1 ) 카운터를 리덕스로 바꾸기
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from './Components/Box';

// normal 버전
// const App = () => {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increase}>증가</button>
//     </div>
//   )
// }

// export default App
// 👇👇👇👇👇👇👇👇

// redux 버전
const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  
  // dispatch(type: 필수요소, payload: 선택요소)
  // payload = 함수 매개변수
  const increase = () => {
    // 5씩 증가 ( reducer.js 참조 )
    dispatch({type: "INCREMENT", payload: {num: 5}})
  }
  const decrease = () => {
    dispatch({type: "DECREMENT"})
  }
  const login = () => {
    dispatch({type: "LOGIN", payload: {id: "park", password: "1234"}})
  }
  return (
    <div>
      <h1>ID: {id} <br />PW: {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>감소</button>
      <Box />
    </div>
  )
}

export default App
