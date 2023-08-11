import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './Box';

function App() {
  const dispatch = useDispatch();
  // reducer.js의 값을 가져오는 역할 useSelector()
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);

  const Increase = () => {
    dispatch({ type: "INCREMENT", payload: {num: 5} }) 
    // reducer.js의 action값으로 넣었음, payload는 부가적
  }
  const Login = () => {
    dispatch({ type: "LOGIN", payload: {id: 'oh', password: '1234'}})
  }
  return (
    <div className="App">
      <h1>
        {id} {password}
      </h1>
      <h1>{count}</h1>
      <button onClick={Increase}>증가</button>
      <button onClick={Login}>로그인</button>
      <Box />
    </div>
  );
}

export default App;
