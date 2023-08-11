import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  const GoToHomePage = () => {
    navigate('/')
  }
  return (
    <div>
      <div>About Page</div>
      <button onClick={GoToHomePage}>Go to Home Page</button>
    </div>
  )
}

export default About
