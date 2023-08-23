import React, { useState } from 'react'
import { VscFiles, VscCode, VscMail, VscAccount, VscGear } from 'react-icons/vsc'
import Explorer from './Explorer'
import BodyNavigation from './BodyNavigation'
import { useNavigate } from 'react-router-dom'
import ReactIcon from '../icons/ReactIcon'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import JsIcon from '../icons/JsIcon'

const icons_top = [
  {
    id: 1,
    icon: <VscFiles />,
    navigate: "/"
  },
  {
    id: 2,
    icon: <VscCode />,
    navigate: "/projects"
  },
  {
    id: 3,
    icon: <VscMail />,
    navigate: "/contact"
  }
]
const icons_bot = [
  {
    id: 4,
    icon: <VscAccount />,
    navigate: "/about"
  },
  {
    id: 5,
    icon: <VscGear />,
    navigate: "/setting"
  },
]

const explorerBtn = [
  {
    id: 1,
    navigate: "/",
    Icon: ReactIcon,
    name: 'Home.jsx',
  },
  {
    id: 2,
    navigate: "/projects",
    Icon: JsIcon,
    name: 'Project.js',
  },
  {
    id: 4,
    navigate: "/about",
    Icon: HtmlIcon,
    name: 'About.html',
  },
  {
    id: 3,
    navigate: "/contact",
    Icon: CssIcon,
    name: 'Contact.css',
  },
]


const Sidebar = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(1)
  const handleSelect = (key) => {
    setSelect(key)
  }
  return (
    <div className='Sidebar'>
      <div className='sidebar-icons'>
        <div className='sidebar-top'>
          {icons_top.map((icon, index) => (
            <div key={index} onClick={() => (handleSelect(icon.id), navigate(`${icon.navigate}`))} className={`${select === icon.id ? 'select-icon' : 'icon'}`}>{icon.icon}</div>
          ))}
        </div>
        <div className='sidebar-bottom'>
        {icons_bot.map((icon, index) => (
            <div key={index} onClick={() => (handleSelect(icon.id), navigate(`${icon.navigate}`))} className={`${select === icon.id ? 'select-icon' : 'icon'}`}>{icon.icon}</div>
          ))}
        </div>
      </div>
      <Explorer explorerBtn={explorerBtn} handleSelect={handleSelect} select={select} />
      <BodyNavigation explorerBtn={explorerBtn} handleSelect={handleSelect} select={select} />
    </div>
  )
}

export default Sidebar
