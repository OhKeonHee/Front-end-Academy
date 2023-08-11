import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';


const ProductAll = ({ userSearch }) => {
  const [productList, setProductList] = useState([])
  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/adfdaf/React_ShoppingMall/collaboration`;
    let response = await fetch(url); // response변수에 url값을 넣어라
    let data = await response.json(); // data에 response를 json형태로 저장
    console.log(data)
    setProductList(data)
  }
  useEffect(() => {
    getProduct();
  }, []);

  const searched = productList.filter((item) => item.title.toLowerCase().includes(userSearch));
  
  return (
    <div style={{ marginTop: '160px' }}>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll