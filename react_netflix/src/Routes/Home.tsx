import { useState } from "react";
import { useQuery } from "react-query";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { PathMatch } from "react-router-dom";

const Wrapper = styled.div`
  background: #000;
`

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${props => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;
const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;
const Box = styled(motion.div)<{bgPhoto: string}>`
  /* background-color: #fff; */
  background-image: url(${props => props.bgPhoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 200px;
  font-size: 66px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${props => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`

const rowVariants = {
  hidden: {
    x: window.outerWidth,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth,
  },
}

const BoxVariants = {
  normal: { scale: 1 },
  hover: {
    zIndex: 99,
    scale: 1.3, 
    y: -50,
    transition: {delay: 0.3, duration: 0.3, type: 'tween'},
  },
}

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {delay: 0.3, duration: 0.3, type: 'tween'},
  },
}
// 한 번에 보여주고 싶은 영화의 수
const offset = 6;

const Home = () => {
  const history = useNavigate();
  const bigMovieMatch: PathMatch<string> | null = useMatch('/movies/:movieId')
  const {data, isLoading} = useQuery<IGetMoviesResult>(['movies', 'nowPlaying'], getMovies);
  
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  // 슬라이더 연속클릭 시 발생하는 애니메이션 버그 관리
  // false: 앞 애니메이션 종료됨, true: 아직 애니메이션 실행 중
  const increaseIndex = () => {
    if(data) {
      if(leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 1;
      // -1인 이유는 메인에 사진으로 영화하나가 있기 때문
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
    }
  };

  const toggleLeaving = () => setLeaving(prev => !prev);
  const onBoxClicked = (movieId: number) => {
    history(`/movies/${movieId}`)
  }
  const onOverlayClick = () => history('/');
  return (
    <Wrapper>
      {isLoading ? <Loader>Loading...</Loader> : ( 
        <>
          <Banner onClick={increaseIndex} bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              {/* initial={false}: 페이지 이동했다가 돌아올 때마다 박스가 들어오는 애니메이션을 없앰 */}
              <Row 
                key={index} 
                variants={rowVariants} 
                initial='hidden' 
                animate='visible' 
                exit='exit'
                transition={{type: "tween", duration: 1}}>
                {
                  data?.results
                  .slice(1).slice(offset * index, offset * index + offset)
                  .map((movie) => 
                  <Box 
                    key={movie.id} 
                    layoutId={movie.id + ''}
                    onClick={() => onBoxClicked(movie.id)}
                    bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    variants={BoxVariants}
                    initial='normal'
                    whileHover='hover'
                    >
                    <Info variants={infoVariants}><h4>{movie.title}</h4></Info>
                  </Box> )
                }
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <Overlay onClick={onOverlayClick} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                <motion.div
                  layoutId={bigMovieMatch.params.movieId}
                  style={{
                    position: 'absolute',
                    width: '40vw',
                    height: '80vh',
                    backgroundColor: 'red',
                    top: 50,
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                  }}
                />
              </>
              
            ) : null}
          </AnimatePresence>
        </> 
      )}
    </Wrapper>
  )
}

export default Home
