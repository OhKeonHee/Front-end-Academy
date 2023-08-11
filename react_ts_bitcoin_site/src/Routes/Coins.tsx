import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useState } from 'react';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    display: block;
    transition: .2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 30px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

interface CoinInterface {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true); // 정상적으로 데이터를 가져오지 못했을 경우 사용할 state
  useEffect(() => {
    (async () => {
      const response = await (await fetch("./coins.json")).json();
      setCoins(response.slice(0, 100));
      setLoading(false) // 값이 정상적으로 들어오지 않으면 false
    })();
    // 고차함수의 비동기처리를 위한 async
    // 외부데이터 가져올 때 많이 사용하는 fetch함수
    // json()을 쓰기위해선 데이터가 먼저 들어와야함으로 response에 await를 써 먼저 실행되게함
    // 고차함수의 익명함수(ex: () => )는 async를 ()안에 넣고 뒤에 ()로 실행시켜줘야함
    // async function() class 같은 형식은 쓸 필요없음 -> 익명함수가 아니기때문
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      {loading ? (<Loader>'Loading...'</Loader>) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`} >
                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  )
}

export default Coins
