import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  width: 100%;
  display: flex;
`
const Left = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`
const Right = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Div = styled.div`
  width: 50%;
  display: flex;
  justifyContent: space-between;
  gap: 20%;
  border-bottom: 10px solid blue;
  padding-bottom: 10px;
`
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
const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  border: 1px solid black;
  padding: 10px 100px;
  background-color: transparent;
  transition: 0.3s;
  font-size: 12px;
  &:hover {
    background-color: black;
    color: white;
  }
`
const A = styled.a`
  display: flex;
  gap: 20px;
  color: #777;
  cursor: pointer;
  text-decoration: none;
  &:focus {
    text-decoration: underline;
    color: black;
  }
`

const ProductDetail = () => {
  let {id} = useParams(); //파라미터로 유동적으로 바뀌는 id값을 객체형태로 저장
  const [product, setProduct] = useState(null) // 처음엔 상품의 값이 있을 수 없으므로 null값
  const [loading, setLoading] = useState(false)
  const getProductDetail = async () => { // 클릭한 상품의 상세정보를 출력할 수 있게끔 하는 함수
    let url = `https://my-json-server.typicode.com/adfdaf/React_ShoppingMall/collaboration/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data) // 클릭한 상품의 db.json정보들이 뜸
    setLoading(false)
    setProduct(data)
  }
  useEffect(() => {
    getProductDetail();
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
  if(loading || product == null) return <h1>Loading</h1>
  return (
    <div>
      <ChildNav>콜라보레이션</ChildNav>
      <ChildNav style={{margin: '0px'}}>
        <Ul>
          {collaboList.map((collabo) => (
            <li>{collabo}</li>
          ))}
        </Ul>
      </ChildNav>
      <Container>
        <Left>
          <img src={product.img} />
        </Left>
        <Right>
          <Div>
            <div>
              <div className='product-info'>{product.title}</div>
              <div className='product-info' style={{color: '#888'}}>{product.color}</div>
            </div>
            <div className='product-info'>{product.price}</div>
          </Div>
          <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px', width: '50%', borderBottom: '1px solid black', paddingBottom: '10px'}}>
            <Button>바로 구매</Button>
            <Button>소핑백에 담기</Button>
          </div>
          <div style={{width: '50%'}}>
            <div style={{display: 'flex', justifyContent:'space-between', marginTop: '20px'}}>
              <p>&gt; 소재</p>
              <p style={{color: '#888'}}>cotten 100</p>
            </div>
            <ul style={{transform: 'translateX(-30px)'}}>
              <li>제품상세정보</li>
              <li>제품취급유의사항</li>
              <li>사이즈</li>
            </ul>
            <p style={{color: 'blue', fontSize: '12px'}}>*해당 제품은 생일 바우처 적용 불가 제품입니다.</p>
          </div>
        </Right>
      </Container>
    </div>
  )
}

export default ProductDetail