import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 100vw;
  margin-top: 80px;
  border-bottom: 1px solid black;
  padding-bottom: 100px;
`
const Form = styled.form`
  width: 800px;
  margin: 0 auto;
  margin-top: 200px;
  h1 {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
`
const FormInput = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    font-size: 12px;
  }
`
const Input = styled.input`
  width: 100%;
  outline: none;
`
const Button = styled.button`
  border: none;
  padding: 7px 0;
  background-color: ${props => props.login ? "black" : "#FFE500"};
  color: ${props => props.login ? "white" : "#402325"};
  margin-top: ${props => props.login ? "20px" : "0"};
`
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 12px;
  cursor: pointer;
`
const Join = styled.div`
  display: flex;
  flex-direction: column;
`


const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user')
    setAuthenticate(true)
    navigate('/')
  }
  return (
    <Container>
      <Form onSubmit={loginUser}>
        <h1>로그인</h1>
        <FormInput>
          <label>아이디</label>
          <Input type="text" />
          <label>비밀번호</label>
          <Input type="password" />
          <Button login type="submit">로그인</Button>
          <Button>카카오계정 로그인</Button>
          <Div>
            <Join>
              <p>아이디 / 비밀번호 찾기</p>
              <p>회원가입</p>
            </Join>
            <p>비회원 주문조회</p>
          </Div>
        </FormInput>
      </Form>
    </Container>
  )
}

export default Login