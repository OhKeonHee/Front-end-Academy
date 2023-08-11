import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [errorId, setErrorId] = useState("");
  const [errorPw, setErrorPw] = useState("");

  const handleChangeId = (e: any) => {
    setId(e.target.value);
  }
  const handleChangePw = (e: any) => {
    setPw(e.target.value);
  }

  const handleClickLogin = () => {
    if(id === "") {
      setErrorId("아이디를 정확히 입력해주세요.")
    }
    if(pw === "") {
      setErrorPw("비밀번호를 정확히 입력해주세요.")
    }
    if(id !== "" && pw !== "") {
      
      alert("아이디와 비밀번호가 모두 입력되었습니다. 로그인을 시작합니다.")
      
    }
  }
  
  return (
    <div className="App">
      <div className='container'>
        <h1>로그인</h1>
        <div>아이디</div>
        <input type="text" value={id} onChange={handleChangeId}/>
        <div style={{color: 'red'}}>{errorId}</div>
        <div>비밀번호</div>
        <input type="password" value={pw} onChange={handleChangePw}/>
        <div style={{color: 'red'}}>{errorPw}</div>
        <div>
          <button onClick={handleClickLogin}>로그인</button>
        </div>
      </div>
    </div>
  );
}

export default App;
