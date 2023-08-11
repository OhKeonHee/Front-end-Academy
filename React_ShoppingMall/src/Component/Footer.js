import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
  font-size: 12px;
  // background-color: #0001C8;
  color: black;
  padding: 20px;
`
const Top = styled.div`
  width: 1440px;
  display: flex;
  padding: 50px 20px;
  padding-bottom: 10px;
  gap: 10%;
`
const Bottom = styled.div`
  width: 1440px;
  padding: 50px 20px;
  display: flex;
  gap: 20%;
`
const Mid = styled.div`
  width: 1440px;
  padding: 0 20px;
  line-height: 2em;
  margin-top: -20px;
  button {
    background-color: #0001C8;
    color: white;
    border: none;
    padding: 10px 100px;
  }
`
const Service = styled.div`
  ul {
    text-align: right;
    padding-right: 40px;
    li {
      margin: 10px 0;
    }
  }
`
const AderInfo = styled.div`
  line-height: 2em;
`
const CompanyInfo = styled.div`

`
const Social = styled.div`
  display: flex;
  flex-direction: column;
`
const Icons = styled.div`
  display: flex;
  gap: 10px;
`
const Icon = styled.div`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`



const Footer = () => {
  return (
    <Container>
      <Top>
        <AderInfo>
          <p style={{ fontWeight: 'bold', fontSize: "14px" }}>
            ADER
          </p>
          <p>
            ADER [아더]는 2014년에 설립되었으며 패션을 기반으로 한 문화 커뮤니케이션 브랜드입니다.<br />
            ADER는 ‘but near missed things’ 이라는 브랜드 슬로건, 철학을 바탕으로 사람들이 일상에서 쉽게 놓치고 있는 것들을 익숙하지만 낯설고,<br />
            새롭게 느낄 수 있도록 표현하는 활동에 집중하고 있으며, 사진, 영상, 공간, 디자인, 예술, 가구 등 문화 콘텐츠를 우리의 방식으로 재편집하여 새로운 문화를 제안합니다.
          </p>
          <p>
            ADER는 모든 영역 간의 커뮤니케이션 디자인하는 것을 브랜드 핵심 가치로서 추구합니다.
          </p>
        </AderInfo>
        <Service>
          <ul>
            <p>고객 서비스</p>
            <li>공지사항</li>
            <li>FAQ</li>
            <li>문의하기</li>
            <li>온라인스토아 이용 가이드</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </Service>
      </Top>
      <Mid>
        <p style={{ fontWeight: 'bold', fontSize: "14px" }}>
          Blue Mark
        </p>
        <p>
        블루 마크는 아더 브랜드의 가품 근절을 통해 가품으로부터 소비자를 보호하고 정품인증과 소비자 보호를 넘어 청렴한 문화 의식을 알리기 위한 문화 캠페인이다.<br />
        이를 위해 만들어진 ‘블루 마크 택’은 아더가 제조한 정식 제품임을 보증하는 역할을 한다. 이 캠페인은 블루 컬러에서부터 시작되는데, 여기서 블루라는 컬러는<br />
        ‘청렴함, 순수함, 오리지널리티’의 의미를 함축하고 있다.
        </p>
        <button>
          블루마크
        </button>
      </Mid>
      <Bottom>
        <CompanyInfo>
          <p style={{ fontWeight: 'bold', fontSize: "14px" }}>
            회사정보
          </p>
          <p>
            Company ADER | Business Name FIVE SPACE CO.,LTD | Business License 760-87-01757 |<br />
            MAIL-ORDER LICENSE NO. 2021-서울성동-01588 | CEO Hann | office ADER 3F 53, Yeonmujang-gil,<br /> Seongdong-gu, Seoul, Korea
          </p>
          <p>
            C/S office ADER 3F 53, Yeonmujang-gil, Seongdong-gu, Seoul, Korea
            TEL. 02-792-2232 | Office hour Mon - Fri AM 10:00 - PM 5:00
          </p>
          <p>
            ©2021 ADER All Rights Reserved
          </p>
        </CompanyInfo>
        <Social>
          <p style={{ fontWeight: 'bold', fontSize: "14px" }}>
            ADER 소셜미디어
          </p>
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faComment} style={{transform: 'translateY(70%)', fontSize: '15px'}}/>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} style={{transform: 'translateY(70%)', fontSize: '15px'}}/>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} style={{transform: 'translateY(70%)', fontSize: '15px'}}/>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} style={{transform: 'translateY(70%)', fontSize: '15px'}}/>
            </Icon>
          </Icons>
        </Social>
      </Bottom>
    </Container>
  )
}

export default Footer
