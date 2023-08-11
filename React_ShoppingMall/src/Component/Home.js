import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 1400px;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 80px;
`
const ImgBox = styled.div`
  display: flex;
  width: inherit;
  justify-content: center;
  position: relative;
`
const Img = styled.img`
  width: 50%;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`
const Span = styled.span`
  display: block;
  position: absolute;
  color: ${props => props.white ? "white" : "black"};
  top: 50px;
  left: ${props => props.first ? "100px" : "800px"};
`

const Home = () => {
  const navigate = useNavigate();
  const goToCollaboration = () => {
    navigate('/collaboration');
  }
  return (
    <Container>
      <ImgBox>
        <Img className='homeImg_1' src='http://bbbtan.cafe24.com/upload/2023ss/snks/2nd/main_pc.jpg' onClick={() => goToCollaboration()}/>
        <Span white first className='home_span'>
          ADER ERROR's Curve; Sabot<br />
          제품 바로 보기 &gt;
        </Span>
        <Img className='homeImg_2' src='http://bbbtan.cafe24.com/upload/2023ss/snks/main-2.jpg' onClick={() => goToCollaboration()} />
        <Span className='home_span'>
          The 2nd drop of 23SS ‘Through Editism’ Collection<br />
          제품 바로 보기 &gt;
        </Span>
      </ImgBox>
      <ImgBox>
        <Img className='homeImg_3' src='http://bbbtan.cafe24.com/upload/2023ss/snks/main-3.jpg' onClick={() => goToCollaboration()} />
        <Span first className='home_span'>
          NEW LINE ‘Significant<br />
          제품 바로 보기 &gt;
        </Span>
        <Img className='homeImg_4' src='http://bbbtan.cafe24.com/upload/2023ss/snks/main-4.jpg' onClick={() => goToCollaboration()} />
        <Span className='home_span'>
          아더에러 콜라보레이션<br />
          제품 바로 보기 &gt;
        </Span>
      </ImgBox>

    </Container>
  )
}

export default Home