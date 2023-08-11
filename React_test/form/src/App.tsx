import React from 'react'
import { useState, useEffect } from 'react'
import { styled } from 'styled-components';


const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 540px;
  height: 900px;
  border: 1px solid #aacdff;
  box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 60px;
`
const Title = styled.div`
  font-size: 32px;
  color: #0068ff;
  font-weight: bold;
  width: 380px;
  margin-bottom: 40px;
`
const Input = styled.div`
  width: 380px;
  height: 60px;
  background-color: #fff;
  border: 1px solid #d2d2d2;
  border-radius: 7px;
  padding: 18px;
  margin-top: 20px;
`
const Error = styled.div`
  color: red;
  margin: 0;
`

const App = () => {
  const [email, setEmail] = useState(``); 
  const [name, setName] = useState(``); 
  const [password, setPassword] = useState(``);
  const [re_password, setRe_Password] = useState(``);
  const [gender, setGender] = useState(``);
  const [check, setCheck] = useState(false);
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePassword= (e) => {
    setPassword(e.target.value);
  };
  const handleChangeRePassword = (e) => {
    setRe_Password(e.target.value);
    if(re_password !== password) {

    }
  };
  const handleChangeChecked= (e) => {
    setCheck(true);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.id);
  };

  const [isEmail, setIsEmail] = useState("");
  const [isName, setIsName] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isRePassword, setIsRePassword] = useState("");
  const [isGender, setIsGender] = useState("");
  const [isCheck, setIsCheck] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if(email === "") {
      setIsEmail("이메일을 입력하지 않았습니다.");
    }
    if(name === "") {
      setIsName("이름을 입력하지 않았습니다.")
    } 
    if(password === "") {
      setIsPassword("비밀번호를 입력하지 않았습니다.")
    }
    if(password === re_password) {
      setIsRePassword("입력하신 비밀번호가 다릅니다.")
    }
    if(gender === "") {
      setIsGender("성별을 선택해주세요.")
    }
    if(check === false) {
      setIsCheck("이용약관에 동의해주세요.")
    }
  }

  return (
    <Body>
      <Wrapper>
        <Title>회원가입을 위해<br />정보를 입력해주세요.</Title>
        <form onSubmit={handelSubmit}>
          <label htmlFor='email'>*이메일 : </label><br />
          <input type="text" name='email' value={email} onChange={handleChangeEmail}/>
          <Error>{isEmail}</Error>
          <br />
          <label htmlFor='name'>*이름 : </label><br />
          <input type="text" name='name' value={name} onChange={handleChangeName}/>
          <Error>{isName}</Error>
          <br />
          <label htmlFor='password'>*비밀번호 : </label><br />
          <input type="text" name='password' value={password} onChange={handleChangePassword}/>
          <Error>{isPassword}</Error>
          <br />
          <label htmlFor='re_password'>*비밀번호 확인 : </label><br />
          <input type="text" name='re_password' value={re_password} onChange={handleChangeRePassword}/>
          <Error>{isRePassword}</Error>
          <br />
          <label>
            <div onChange={handleChangeGender}>
              <input type="radio" name='gender' id='woman' value={gender}/><label htmlFor="woman">여성</label>
              <input type="radio" name='gender' id='man' value={gender}/><label htmlFor="man">남성</label>
            </div>
            <Error>{isGender}</Error>
          </label>
          <br />
          <input type="checkbox" name="check" id="" onClick={handleChangeChecked}/><label htmlFor="check">이용약관 개인정보 수집 및 이름, 마케팅 활용 선택에 모두 동의합니다.</label>
          <Error>{isCheck}</Error> <br />
          <hr />
          <button type='submit'>가입하기</button>
        </form>
      </Wrapper>
    </Body>
  )
}

export default App
