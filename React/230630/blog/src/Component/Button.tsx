import React from 'react'
import { styled } from 'styled-components'

const Container = styled.button`
  border: 0;
  color: #fff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }
  &:active {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`

interface Props {
  readonly label: string;
  readonly onclick?: () => void;
}

const Button = ({label, onclick}: Props) => {
  return (
    <Container onClick={onclick}>
      {label}
    </Container>
  )
}

export default Button
