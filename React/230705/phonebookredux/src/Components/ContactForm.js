import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  // const getName = (event) => {
  //   setName(event.target.value);
  // }
  // const getPhoneNumber = (event) => {
  //   setPhoneNumber(event.target.value);
  // }
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_CONTACT', payload: { name, phoneNumber } })
  }
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => {setName(event.target.value)}}
          type="text"
          placeholder="이름을 입력해주세요"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          value={phoneNumber}
          onChange={(event) => {setPhoneNumber(event.target.value)}}
          type="text"
          placeholder="비밀번호를 입력해주세요"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
}

export default ContactForm