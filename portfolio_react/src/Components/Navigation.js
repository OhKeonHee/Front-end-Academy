import React from 'react'

const Navigation = () => {
  return (
    <div className='Navigation'>
      <div className='nav-menu'>
        <img width={20} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' />
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <div className='title'>
        KEONHEE OH-Visual Studio Code
      </div>
      <div className='nav-right'>
        <p id='nav-right-col1'></p>
        <p id='nav-right-col2'></p>
        <p id='nav-right-col3'></p>
      </div>
    </div>
  )
}

export default Navigation
