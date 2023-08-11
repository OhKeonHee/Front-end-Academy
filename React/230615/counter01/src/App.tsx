import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Component/Body';
import Viewer from './Component/Viewer';
import Controller from './Component/Controller';
import { useState, useEffect } from 'react';
import Even from './Component/Even';


// function App() {
//   return (
//     <div className='App'>
//       <Body/>
//     </div>
//   )
// }

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value: number) => {
    setCount(count + value);
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  useEffect(() => {
    console.log("count 업데이트: ", text, count);
  }, [text, count]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("포인트");
    }, 1000);

    return () => {
      console.log("클린업"); // 위 count업데이트 useEffect가 실행되면(text나 count가 바껴서 콘솔을 출력하면) clearInterval로 위 intervalID인 interval을 초기화하고 다시 실행
      clearInterval(intervalID);
    };
  });

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handleChangeText}/>
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />} // 식이 참일 경우에 Even.tsx가 나옴
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  )
}

export default App;
