import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  let [keyword, setKeyword] = useState('');
  let dispatch = useDispatch();
  const SearchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  }
  return (
    <Form onSubmit={SearchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            type='text'
            placeholder='이름을 입력해주세요'
          />
        </Col>
        <Col lg={2}>
          <Button type='submit'>찾기</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
