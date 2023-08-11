import React, { useEffect, useState } from 'react'
import { VscAdd, VscChevronDown, VscEllipsis, VscChevronUp, VscChromeClose, VscChromeMinimize, VscChromeMaximize, VscArrowLeft, VscArrowRight, VscRefresh, VscInfo, VscAccount, VscKebabVertical } from 'react-icons/vsc'
import { FcGoogle } from "react-icons/fc";
import { TfiShare, TfiStar } from "react-icons/tfi";

const Home = () => {
  const [view, setView] = useState('none');
  const [failView, setFailView] = useState('none');
  const [modalView, setModalView] = useState('none');
  const [code, setCode] = useState('')
  const [blink, setBlink] = useState('none')
  const activeEnter = (e) => {
    if(e.key === "Enter") {
      codeInput();
      e.target.value = "";
    }
  }
  useEffect(() => {})
  const codeInput = () => {
    if(code === "npm start") {
      setView('block');
      setFailView('none');
      setTimeout(() => {
        setModalView('block');
      },1000)
    } else {
      setFailView('block');
      setView('none');
      setModalView('none');
    }
  }
  return (
    <div>
      <div className='Home'>
        <div className='code'>
          <div className='code-side'>
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
            <h1>5</h1>
            <h1>6</h1>
            <h1>7</h1>
          </div>
          <div className='main'>
            <div className='title'>
              <h1 className='code-import'>
                <span style={{color: '#BB77D9'}}>import </span>
                <span style={{color: '#9CBF78'}}>'./css/App.css'</span>
                <span style={{color: 'var(--font-color)'}}>;</span>
              </h1>
              <h1 className='code-import' style={{marginBottom: '80px'}}>
                <span style={{color: '#BB77D9'}}>import </span>
                <span style={{color: '#E06C75', marginRight: '5px'}}>React</span>
                <span style={{color: '#BB77D9'}}>from</span>
                <span style={{color: '#9CBF78'}}>'react'</span>
              </h1>
              <h1 className='code-first'>
                <span className='left-chevron'></span>
                <span style={{color: '#E06C75'}}>div </span>
                <span style={{color: '#D99F6C'}}>className</span>
                <span style={{color: '#56B6C2'}}>=</span>
                <span style={{color: '#9CBF78'}}>'title'</span>
                <span className='right-chevron'></span>
              </h1>
              <h1 className='code-second'>
                <span className='left-chevron'></span>
                <span style={{color: '#E06C75'}}>h1 </span>
                <span className='right-chevron'></span>
                <span style={{color: 'var(--font-color)'}}>Thanks For Your Visit!</span>
                <span className='left-chevron'></span>
                <span style={{color: 'var(--font-color)'}}>/</span>
                <span style={{color: '#E06C75'}}>h1</span>
                <span className='right-chevron'></span>
              </h1>
              <h1 className='code-third'>
                <span className='left-chevron'></span>
                <span style={{color: '#E06C75'}}>p </span>
                <span className='right-chevron'></span>
                <span style={{color: 'var(--font-color)'}}>
                  OH KEON HEE's Portfolio
                </span>
                <span className='left-chevron'></span>
                <span style={{color: 'var(--font-color)'}}>/</span>
                <span style={{color: '#E06C75'}}>p</span>
                <span className='right-chevron'></span>
              </h1>
              <h1 className='code-fourth'>
                <span className='left-chevron'></span>
                <span style={{color: 'var(--font-color)'}}>/</span>
                <span style={{color: '#E06C75'}}>div</span>
                <span className='right-chevron'></span>
              </h1>
            </div>
          </div>
        </div>
        <div className='terminal-info'>
          <h3 className='left-bracket'></h3>
          <h3 style={{fontStyle: 'normal', transform: 'translateY(-3px)'}}>/ *</h3>
          <h3>터미널에 '<span>npm start</span>'를 입력해주세요.</h3>
          <img src="img/figma.png" width={15} />
          <h3 style={{fontStyle: 'normal', transform: 'translateY(-3px)'}}>* /</h3>
          <h3 className='right-bracket'></h3>
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
          <div className='terminal-main'>
            PS C:\Users\Administrator\Documents\front_end_academy\portfolio_react> 
            <div className='blink' style={{display: `${blink}`}}></div>
            <input 
                type='text' 
                id='terminal_code' 
                onKeyDown={(e) => activeEnter(e)}
                onChange={(e) => setCode(e.target.value)}
                onFocus={(e) => setBlink('inline-block')}
              />
            <div className='terminal-success' style={{display: `${view}`}}>
              <h4 style={{color: '#63B865'}}>Compiled successfully!</h4><br />
              <h4>You can now view <span style={{color: 'var(--title)'}}>Portfolio</span> in the browser.</h4><br />
              <h4><b style={{color: 'var(--title)', marginRight: '170px'}}>Local:</b> http://localhost:<b style={{color: 'var(--title)'}}>3000</b></h4>
              <h4><b style={{color: 'var(--title)', marginRight: '24px'}}>On Your Network:</b>  http://192.168.110.180:<b style={{color: 'var(--title)'}}>3000</b></h4><br />
              <h4>Note that the development build is not optimized.</h4>
              <h4>To create a production build, use <b style={{color: '#42B3C2'}}>npm run build.</b></h4><br />
              <h4>webpack compiled <b style={{color: '#A5E075'}}>successfully</b></h4>
            </div>
            <div className='terminal-false' style={{display: `${failView}`}}>
              <h4 style={{color: '#F1443D'}}>Failed to compile.</h4>
              <h4>unknown command: "<b style={{color: '#F1443D'}}>{code}</b>"</h4>
              <h4 style={{color: '#F1443D'}}>{code} : '{code}' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램으로 인식되지 않습니다.<br /> 이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시 시도하십시오.</h4>
            </div>
          </div>
        </div>
        <div className='modal' style={{display: `${modalView}`}}>
          <div className='modal-nav'>
            <div className='modal-window'>
              <svg fill='#00bcd4'>
                <path d='m12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85s-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89m-4.63 9.89c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47-.54-.03-1.11-.03-1.71-.03s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47l-.81 1.5.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47m-2.62-6.72c-.19.22-.39.45-.59.72h.59.59c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-.59-.59c.2.27.4.5.59.72m4.62-13.22c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95m-.29 9.31c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26m-10.16 0c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9m-4.95-8.56l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04c-1.59-1.5-2.97-2.08-3.6-1.7-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z' />
              </svg>
              <div>React App</div>
              <span onClick={() => {setModalView('none')}}><VscChromeClose /></span>
            </div>
            <div className='modal-btns'>
              <span><VscChromeMinimize /></span>
              <span><VscChromeMaximize /></span>
              <span onClick={() => {setModalView('none')}}><VscChromeClose /></span>
            </div>
          </div>
          <div className='modal-address'>
            <span><VscArrowLeft /></span>
            <span><VscArrowRight /></span>
            <span><VscRefresh /></span>
            <div className='address'>
              <div className='left'>
                <span id='icon'><VscInfo /></span>
                <span>localhost:3000</span>
              </div>
              <div className='right'>
                <span><FcGoogle /></span>
                <span><TfiShare /></span>
                <span><TfiStar /></span>
              </div>
            </div>
            <span><VscAccount /></span>
            <span style={{transform: 'translateY(1px)'}}><VscKebabVertical /></span>
          </div>
          <div className='modal-view'>
            <h1>피그마 내용</h1>
            <p>OH KEON HEE's Portfolio</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home


{/* <div className='logo'>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#1f2428">
          <path d="M29.01,5.03,23.244,2.254a1.742,1.742,0,0,0-1.989.338L2.38,19.8A1.166,1.166,0,0,0,2.3,21.447c.025.027.05.053.077.077l1.541,1.4a1.165,1.165,0,0,0,1.489.066L28.142,5.75A1.158,1.158,0,0,1,30,6.672V6.605A1.748,1.748,0,0,0,29.01,5.03Z"></path>
          <path d="M29.01,26.97l-5.766,2.777a1.745,1.745,0,0,1-1.989-.338L2.38,12.2A1.166,1.166,0,0,1,2.3,10.553c.025-.027.05-.053.077-.077l1.541-1.4A1.165,1.165,0,0,1,5.41,9.01L28.142,26.25A1.158,1.158,0,0,0,30,25.328V25.4A1.749,1.749,0,0,1,29.01,26.97Z"></path>
          <path d="M23.244,29.747a1.745,1.745,0,0,1-1.989-.338A1.025,1.025,0,0,0,23,28.684V3.316a1.024,1.024,0,0,0-1.749-.724,1.744,1.744,0,0,1,1.989-.339l5.765,2.772A1.748,1.748,0,0,1,30,6.6V25.4a1.748,1.748,0,0,1-.991,1.576Z" ></path>
        </svg>
      </div> */}


// Compiled successfully!

// You can now view todolist_re in the browser.     

// Local:            http://localhost:3001        
// On Your Network:  http://192.168.110.180:3001  

// Note that the development build is not optimized.
// To create a production build, use npm run build. 

// webpack compiled successfully