import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  width: calc(100% - 40px);
`
const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

const Header = () => {
  return (
    <Container>
      <Title>블로그 포스트</Title>
    </Container>
  )
}

export default Header
