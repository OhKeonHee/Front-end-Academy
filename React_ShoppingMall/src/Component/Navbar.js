import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { styled } from 'styled-components'
import { Dropdown } from 'react-bootstrap'

const Container = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 999;
  background-color: white;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`

const Navbar = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  }
  const goToCart = () => {
    navigate('/login');
  }
  const goToLogin = () => {
    navigate('/login');
  }

  const goToCollaboration = () => {
    navigate('/collaboration');
  }

  const [userSearch, setUserSearch] = useState('');
  const search = (event) => {
    setUserSearch(event.target.value.toLowerCase());
    console.log(userSearch)
  }

  return (
      <Container className='nav-header'>
        <div className='nav-logo' onClick={() => goToHome()}>
          <img width={70} src='http://bbbtan.cafe24.com/images/logo.svg' style={{ transform: 'translateY(-3px)', cursor: 'pointer' }}/>
        </div>
        <div className='nav-menu-area'>
          <ul className='menu'>
            <li onClick={() => goToCollaboration()}>
              <a href='#'>
                NEW<span> +</span>
              </a>
            </li>
            <li onClick={() => goToCollaboration()}>
              <a href='#'>
                오리진<span> +</span>
              </a>
            </li>
            <li onClick={() => goToCollaboration()}>
              <a href='#'>
              슈즈 & 가방<span> +</span>
              </a>
            </li>
            <li onClick={() => goToCollaboration()}>
              <a href='#'>
              에이벤토리<span> +</span>
              </a>
            </li>
            <li onClick={() => goToCollaboration()}>
              <a href='#'>
              콜라보레이션<span> +</span>
              </a>
            </li>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                    Language
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">한국어</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">ENGLISH</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">中文</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">日本語</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
          </ul>
        </div>
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' placeholder='제품검색' onChange={search} userSearch={userSearch}/>
        </div>
        <div onClick={() => goToCart()}>
        <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '20px', cursor: 'pointer' }} />
        </div>
        <div onClick={() => goToLogin()}>
          <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px', cursor: 'pointer' }} />
        </div>
      </Container>
  )
}

export default Navbar