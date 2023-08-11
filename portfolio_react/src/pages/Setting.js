import React from 'react'

const Setting = ({ handleThemeChange }) => {
  return (
    <div className='Setting'>
      <div className='setting-header'>
        <h1>Setting</h1>
        <h2>- 색 테마 설정</h2>
      </div>
      <div className='modes'>
        <div className='bright-mode'>
          <img src='https://img.icons8.com/color/12x/visual-studio-code-2019.png' />
          <h2>밝게(Visual Studio)</h2>
          <button onClick={()=> handleThemeChange(false)}>Light Mode</button>
        </div>
        <div className='dark-mode'>
          <img src='https://adrianwilczynski.gallerycdn.vsassets.io/extensions/adrianwilczynski/one-dark-pro/3.2/1667508135726/Microsoft.VisualStudio.Services.Icons.Default' />
          <h2>One Dark Pro</h2>
          <button onClick={()=>handleThemeChange(true)}>Dark Mode</button>
        </div>
      </div>
    </div>
  )
}

export default Setting
