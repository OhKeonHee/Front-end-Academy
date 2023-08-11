import React from 'react'
import EmailForm from '../Components/EmailForm'
import { VscAdd, VscChevronDown, VscEllipsis, VscChevronUp, VscChromeClose } from 'react-icons/vsc'

const contact = () => {
  const Contact_info = [
    {
      social: 'E-mail',
      href: 'mailto:98ogh@naver.com',
      link: '98ogh@naver.com',
    },
    {
      social: 'GitHub',
      href: 'https://github.com/OhKeonHee',
      link: 'OhKeonHee',
    },
    {
      social: 'kakao',
      href: 'https://open.kakao.com/o/sf3mqjzf',
      link: 'kakaotalk openchat',
    },
  ]
  return (
    <div className='Contact'>
      <div className='contact-inner'>
        <div className='code-side'>
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
          <h1>5</h1>
        </div>
        <div className='contact-main'>
          <h1>.Contact<span style={{color: '#56B6C2'}}>:Click</span></h1><h1 className='left-bracket'></h1><br />
          {Contact_info.map((social, idx) => (
            <div key={idx}>
              <span>{social.social}: </span>
              <a href={social.href} target='_blank'>{social.link}</a>
              <span>;</span>
            </div>
          ))}
          <h1 className='right-bracket'></h1>
        </div>
      </div>
      <div className='terminal'>
        <div className='terminal-nav'>
          <ul className='left'>
            <li>문제</li>
            <li>출력</li>
            <li>터미널</li>
            <li>디버그 콘솔</li>
          </ul>
          <ul className='right'>
            <li><VscAdd /><VscChevronDown style={{scale: '.8', marginLeft: '2px'}}/></li>
            <li><VscEllipsis /></li>
            <li><VscChevronUp /></li>
            <li><VscChromeClose /></li>
          </ul>
        </div>
        <EmailForm />
      </div>
    </div>
  )
}

export default contact
