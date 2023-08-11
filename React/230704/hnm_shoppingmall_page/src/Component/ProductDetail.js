import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';

const ProductDetail = () => {
  let {id} = useParams(); //파라미터로 유동적으로 바뀌는 id값을 객체형태로 저장
  const [product, setProduct] = useState(null) // 처음엔 상품의 값이 있을 수 없으므로 null값
  const [loading, setLoading] = useState(false)
  const getProductDetail = async () => { // 클릭한 상품의 상세정보를 출력할 수 있게끔 하는 함수
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data) // 클릭한 상품의 db.json정보들이 뜸
    setLoading(false)
    setProduct(data)
  }
  useEffect(() => {
    getProductDetail();
  }, []);
  if(loading || product == null) return <h1>Loading</h1>
  return (
    <Container>
      <Row>
        <Col className='product-detail-img'>
          <img src={product.img} />
        </Col>
        <Col>
          <div className='product-info'>{product.title}</div>
          <div className='product-info'>{product.price}</div>
          <div className='choice'>{product.choice ? "Conscious choice" : ""}</div>
          <Dropdown className='drop-down'>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product.size.map((item) => (
                <Dropdown.Item href='#/action-1'>{item}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant='dark' className='add-button'>추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail