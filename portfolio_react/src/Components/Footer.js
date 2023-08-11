import React from 'react'
import { VscRemote, VscSourceControl, VscSync, VscError, VscWarning, VscInfo, VscTelescope, VscBracketError, VscBroadcast, VscCheck, VscCheckAll, VscFeedback, VscBell} from 'react-icons/vsc'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='back-blue-icon'><VscRemote id='icon' /></div>
      <div className='footer-icons'>
        <div className='footer-left'>
          <div>
            <p><VscSourceControl id='icon' />main*</p>
            <p><VscSync id='icon' /></p>
          </div>
          <div>
            <p><VscError id='icon' /> 0</p>
            <p><VscWarning id='icon' /> 0</p>
            <p><VscInfo id='icon' /> 4</p>
          </div>
        </div>
        <div className='footer-right'>
          <p><VscTelescope id='icon' /> Watching...</p>
          <p>줄 21, 열 19</p>
          <p>공백: 2</p>
          <p>UTF-8</p>
          <p>CRLF</p>
          <p><VscBracketError id='icon' /> JavaScript</p>
          <p><VscBroadcast id='icon' /> Go Live</p>
          <p><VscCheck id='icon' /> Spell</p>
          <p><VscCheckAll id='icon' /> Prettier</p>
          <p><VscFeedback id='icon' /></p>
          <p><VscBell id='icon' /></p>
        </div>
      </div>
    </div>
      
  )
}

export default Footer
