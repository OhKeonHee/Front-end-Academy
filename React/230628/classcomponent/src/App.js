// 함수형 컴포넌트
import './App.css';
import { useState } from 'react'

function App() {
  let [counter2, setCounter2] = useState(0);

  const increase = () => {
    setCounter2(counter2 + 1);
    console.log(`${counter2}`)
  }

  return (
    <div className="App">
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
