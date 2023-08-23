import React from 'react'
import { styled } from 'styled-components'
import ReactIcon from '../icons/ReactIcon'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import JsIcon from '../icons/JsIcon'

const Project = styled.div`

`
const Icons = styled.div`
  display: flex;
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
    <div className='Projects'>
      project
      {project_arr.map((it, index) => (
        <Project>
          <Icons>
            <it.HtmlIcon />
            <it.CssIcon />
            <it.JsIcon />
            <it.ReactIcon />
          </Icons>
          {it.read}
        </Project>
      ))}
    </div>
  )
}

export default projects
