import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Routes, Route, Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import Chart from './Chart';
import Price from './Price';

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

const Title = styled.h1`
  font-size: 30px;
  margin: 30px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0;
  border-radius: 10px;
  color: ${props => props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`

interface RouterParams {
  coinId: string;
}
interface LocationState {
  state: string;
}
interface InfoData {
  // vscode에서 똑같은 값만 선택하는 법
  // ex) ,만 지우고 싶다면 ,를 드래그한 후 ctl+D를 누름

  // console창에서 {id: 'btc-bitcoin', name: 'Bitcoin', symbol: 'BTC', rank: 1, is_new: false, …} 이런 형식에 마우스 우클릭 후 store of... 클릭
  // Object.keys(temp1).join()으로 입력하면 밑에 값들이 나옴
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    }
  };

}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouterParams | any>();
  const {state} = useLocation() as LocationState; 
  // coins.tsx에서 Link에 state값으로 coin.name을 부여했음
  // {}가 아닌 그냥 location변수에 저장하면 객체형태로 저장됨, 그 객체 중 state이름을 가진값을 뽑아오기 위해 {state}에 저장
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`/info.json`)).json();
      const priceData = await (await fetch(`tickers.json`)).json();
      setInfo(infoData[0]);
      setPriceInfo(priceData[0]);
      setLoading(false)
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state ? state : loading ? "Loading..." : info?.name }</Title>
      </Header>
      {loading ? (<Loader>'Loading...'</Loader>) : 
        (
          <>
            <Overview>
              <OverviewItem>
                <span>Rank:</span>
                <span>{info?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Symbol:</span>
                <span>{info?.symbol}</span>
              </OverviewItem>
              <OverviewItem>
                <span>New Source:</span>
                <span>{info?.is_new ? 'Yes' : 'No'}</span>
              </OverviewItem>
            </Overview>
            <Description>
              {info ?.type}
            </Description>
            <Overview>
              <OverviewItem>
                <span>Total Supply:</span>
                <span>{priceInfo?.total_supply}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Max Supply:</span>
                <span>{priceInfo?.max_supply}</span>
              </OverviewItem>
            </Overview>
            <Tabs>
              <Tab isActive={chartMatch !== null}>
                <Link to={`/${coinId}/chart`}>Chart</Link>
              </Tab>
              <Tab isActive={priceMatch !== null}>
                <Link to={`/${coinId}/price`}>Price</Link>
              </Tab>
            </Tabs>
            <Routes>
              <Route path='chart' element={<Chart />} />
              <Route path='price' element={<Price />} />
            </Routes>
          </>
        )}
    </Container>
  )
}

export default Coin
