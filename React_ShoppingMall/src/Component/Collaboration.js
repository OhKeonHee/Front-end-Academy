import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';

const ChildNav = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  height: 50px;
  margin-top: 90px;
  line-height: 50px;
  padding-left: 6%;
`
const Ul = styled.ul`
  padding: 0;
  width: 3000px;
  display: flex;
  gap: 50px;
  li {
    font-size: 14px;
    color: #888;
    cursor: pointer;
    &.active {
      color: #000;
      text-decoration: underline;
    }
  }
`

const Collaboration = () => {
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
  const collaboList = [
    '전체보기',
    'ADER x CONVERSE',
    'ADER x ZARA',
    'ADER x CASETiFY',
    'ADER x BIRKENSTOCK',
    'ADER x PUMA',
    'ADER x EASTPAK',
    'ADER x Maison Kitsuné',
    'ADER x HELINOX',
    'ADER x CAPMPER',
    'ADER x BE@RBRICK',
    'ADER x 10 CORSO COMO',
    'ADER x G-SHOCK',
    'ADER x ALPHA INDUSTRIES'
  ]
  let [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    setBtnActive(e.target.value);
  };
  return (
    <div>
      <ChildNav>콜라보레이션</ChildNav>
      <ChildNav style={{margin: '0px'}}>
        <Ul>
          {collaboList.map((collabo, index) => (
            <li value={index} className={"collabo" + (index == btnActive ? " active" : "")} onclick={toggleActive}>{collabo}</li>
          ))}
        </Ul>
      </ChildNav>
      <div style={{ marginTop: '50px' }}>
        <Container>
          <Row>
            {productList.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item}/>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Collaboration