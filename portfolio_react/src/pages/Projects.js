import React from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import ReactIcon from '../icons/ReactIcon'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import JsIcon from '../icons/JsIcon'
import Cyworld from '../imgs/Cyworld.PNG'
import first_portfolio from '../imgs/first_portfolio.PNG'

const Wrapper = styled.div`
  width: calc(100vw - 300px);
  color: var(--font-color);
  padding: 10px 20px;
  margin-top: 40px;
`
const Title = styled.h1`
  font-family: Consolas, 'Courier New', monospace;
`
const Project = styled.div`
  width: 33%;
  padding: 10px;
`
const Icons = styled.div`
  display: flex;
  svg {
    width: 30px;
  }
`
const Thumbnail = styled(motion.img)`
  width: 100%;
  height: auto;
  object-fit: contain;
`

const project_arr = [
  {
    id: 1,
    projectName: 'Mobile MealKit Page',
    date: '23 / 03 / 22',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-mealkit-mobile.netlify.app/',
    thumbnail: first_portfolio,
    read: `23/03/14 ~ 23/03/22 첫 모바일 웹페이지 (밀키트 판매 사이트)
    HTML 파일, CSS 파일 폴더 별로 관리
    include 활용하여 겹치는 Header와 footer를 사용
    figma를 사용해 프로젝트 디자인
    Slick slider 플러그인 사용
    Jquery 사용`
  },
]

const projects = () => {
  return (
    <Wrapper className='Projects'>
      <Title>💻 It's My Projects</Title>
      {project_arr.map((it) => (
        <Project key={it.id}>
          <Thumbnail whileHover={{scale: 1.2}} src={it.thumbnail} />
          <Icons>
            <it.HtmlIcon />
            <it.CssIcon />
            <it.JsIcon />
            <it.ReactIcon />
          </Icons>
          {it.read}
        </Project>
      ))}
    </Wrapper>
  )
}

export default projects
