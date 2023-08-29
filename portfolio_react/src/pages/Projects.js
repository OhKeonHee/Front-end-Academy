import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import ReactIcon from '../icons/ReactIcon'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import JsIcon from '../icons/JsIcon'
import mealkit_mobile from '../imgs/mealkit_mobile.PNG'
import academy_uiux_page from '../imgs/academy_uiux_page.PNG'
import music_play from '../imgs/music_play.PNG'
import first_portfolio from '../imgs/first_portfolio.PNG'
import second_portfolio from '../imgs/second_portfolio.PNG'
import Cyworld from '../imgs/Cyworld.PNG'
import TodoList from '../imgs/react_todolist.PNG'
import emotionDiary from '../imgs/react_emotiondiary.PNG'
import emotionDiary2 from '../imgs/react_emotiondiary_ver2.PNG'
import adererror from '../imgs/react_adererror.PNG'
import netflix from '../imgs/react_netflix.PNG'
import teamproject from '../imgs/teamproject.PNG'
import react_portfolio from '../imgs/react_portfolio.PNG'
import { VscGithubInverted, VscGlobe } from 'react-icons/vsc'

const Wrapper = styled.div`
  width: calc(100vw - 300px);
  color: var(--font-color);
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
`
const Title = styled.h1`
  font-family: Consolas, 'Courier New', monospace;
  padding: 10px 20px;
  color: var(--font-color);
`
const Project = styled.div`
  width: 32.7%;
  /* border: 1px solid red; */
  background-color: var(--explorer-bg-color);
  position: relative;
  margin-bottom: 20px;
`
const Project_num = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: var(--footer-btn);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: bold;
  color: white;
  top: 5px;
  left: 5px;
`
const SkillSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`
const Icons = styled.div`
  display: flex;
  gap: 5px;
  svg {
    width: 30px;
  }
`
const Img = styled(motion.img)`
  width: 100%;
`
const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  a {
    color: #fff;
    width: 60%;
    text-align: center;
    display: block;
    transform: translateY(-25%);
    background-color: transparent;
    border: 3px solid var(--footer-btn);
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    &:hover {
      background-color: var(--footer-btn);
    }
  }
`
const Project_title = styled.h3`
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--font-color);
`
const Project_read = styled.h3`
  font-weight: 300;
  padding: 10px 5px;
  line-height: 1.8;
  white-space: pre-line;
`
const project_arr = [
  {
    id: 1,
    projectName: '모바일로 만든 밀키트페이지',
    date: '23/03/14 ~ 23/03/22',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-mealkit-mobile.netlify.app/',
    github: 'https://github.com/OhKeonHee/Mobile_MealKit_Page',
    thumbnail: mealkit_mobile,
    read: `모바일 웹페이지 (밀키트 판매 사이트)
    include 활용하여 겹치는 Header와 footer를 사용했습니다.
    figma를 사용해 프로젝트 디자인했습니다.
    Slick slider 플러그인을 사용해 슬라이드 기능을 구현했습니다.
    Jquery를 사용했습니다.`
  },
  {
    id: 2,
    projectName: 'UI/UX 학습용 페이지',
    date: '23/03/28 ~ 23/04/04',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: 'x',
    ReactIcon: 'x',
    domain: 'https://ogh-academy-uiux-page.netlify.app/',
    github: 'https://github.com/OhKeonHee/Academy_Page_UIUX',
    thumbnail: academy_uiux_page,
    read: `CSS의 심화내용
    파일을 분할하여 import
    전후선택자, grid학습
    `
  },
  {
    id: 3,
    projectName: '음악 재생 페이지',
    date: '23/04/04',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-music-play.netlify.app/',
    github: 'https://github.com/OhKeonHee/music_play_page',
    thumbnail: music_play,
    read: `HTML, CSS, JS를 활용한 음악재생 페이지
    JS를 활용해 플레이 버튼을 클릭하면 음악 앨범 이미지 rotate값과 traslate값 바꾸기
    그에 따른 배경 이미지를 증감연산자를 이용해 이미지 파일명을 index값으로 i + 1로 바꾸기
    플레이버튼과 일시정지 버튼 마다 onClickListener를 부여해서 재생과 사진에 class 부여
    이전 다음 버튼마다 클릭리스너를 사용해 음악 리스트 프레임을 rotate로 회전시키기`
  },
  {
    id: 4,
    projectName: '첫 번째 포트폴리오 연습',
    date: '23/03/20 ~ 23/03/31',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-1st-portfolio.netlify.app/',
    github: 'https://github.com/OhKeonHee/1st_portfolio',
    thumbnail: first_portfolio,
    read: ``
  },
  {
    id: 5,
    projectName: '두 번째 포트폴리오 연습',
    date: '23/04/04 ~ 23/05/04',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-2nd-portfolio.netlify.app/',
    github: 'https://github.com/OhKeonHee/2nd_portfolio',
    thumbnail: second_portfolio,
    read: ``
  },
  {
    id: 6,
    projectName: '싸이월드, JS를 활용한 끝말잇기',
    date: '23/05/11 ~ 23/05/12',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-cyworld.netlify.app/',
    github: 'https://github.com/OhKeonHee/Cyworld_Page',
    thumbnail: Cyworld,
    read: ``
  },
  {
    id: 7,
    projectName: '팀프로젝트 모바일, 지역 맛집 어플',
    date: '23/05/05 ~ 23/06/30',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://teamproject-2c38f.firebaseapp.com/',
    github: 'https://github.com/OhKeonHee/TeamProject_mobileApp',
    thumbnail: teamproject,
    read: ``
  },
  {
    id: 8,
    projectName: '리액트로 만든 TodoList',
    date: '23/07/11',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-todolist.netlify.app/',
    github: 'https://github.com/OhKeonHee/react_todolist',
    thumbnail: TodoList,
    read: ``
  },
  {
    id: 9,
    projectName: '리액트로 만든 감정다이어리',
    date: '23/07/12',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-emotiondiary.netlify.app/',
    github: 'https://github.com/OhKeonHee/emotionDiary_react',
    thumbnail: emotionDiary,
    read: ``
  },
  {
    id: 10,
    projectName: '리액트로 만든 감정다이어리2',
    date: '23/07/13 ~ 23/07/14',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-emotiondiary-ver2.netlify.app/',
    github: 'https://github.com/OhKeonHee/emotionDiary_ver2_react',
    thumbnail: emotionDiary2,
    read: ``
  },
  {
    id: 11,
    projectName: '리액트로 만든 쇼핑몰',
    date: '23/07/06 ~ 23/07/10',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-adererror.netlify.app/',
    github: 'https://github.com/OhKeonHee/React_ShoppingMall',
    thumbnail: adererror,
    read: ``
  },
  {
    id: 12,
    projectName: '리액트로 만든 넷플릭스',
    date: '23/07/13 ~ 23/07/14',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-netflix.netlify.app/',
    github: 'https://github.com/OhKeonHee/Netflix',
    thumbnail: netflix,
    read: ``
  },
  {
    id: 13,
    projectName: '리액트로 만든 포트폴리오',
    date: '23/07/01 ~ 23/08/29',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-portfolio.netlify.app/',
    github: 'https://github.com/OhKeonHee/Portfolio_react',
    thumbnail: react_portfolio,
    read: ``
  },
  
]

const Projects = () => {
  return (
    <div className='Projects'>
      <Title>💻 It's My Projects</Title>
      <Wrapper>
        {project_arr.map((it) => (
          <Project key={it.id}>
            <Project_num>{it.id}</Project_num>
              <Overlay whileHover={{ opacity: 1 }}>
                <a href={it.domain} target='_blank'>
                  <VscGlobe style={{transform: 'translateY(2px)'}} /> 프로젝트 보기
                </a>
                <a href={it.github} target='_blank'>
                  <VscGithubInverted style={{transform: 'translateY(2px)'}} /> 깃허브 보기
                </a>
              </Overlay>
              <Img src={it.thumbnail} />
            <Project_title>{it.projectName}</Project_title>
            <SkillSec>
              <Icons>
                <it.HtmlIcon />
                <it.CssIcon />
                <it.JsIcon />
                <it.ReactIcon />
              </Icons>
              {it.date}
            </SkillSec>
            {/* <Project_read>
              프로젝트 공부내용 : <br />
              {it.read}
            </Project_read> */}
          </Project>
        ))}
      </Wrapper>
    </div>
  )
}

export default Projects
