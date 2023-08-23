import React from 'react'
import { VscEllipsis, VscChevronDown } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Explorer = ({ handleSelect, select, explorerBtn }) => {
  const navigate = useNavigate();
  return (
    <div className='Explorer'>
      <div className='explorer-header'>
        <p>탐색기</p>
        <p id='icon'><VscEllipsis /></p>
      </div>
      <div className='explorer-hr'>
        <VscChevronDown className='icon' /> 오건희의 포트폴리오
      </div>
      <div className='explorer-main'>
        {explorerBtn.map((it, index) => (
          <button onClick={() => (
            navigate(`${it.navigate}`),
            handleSelect(it.id)
            )} 
            className={`${select === it.id ? 'select' : ''}`}
            key={index}
            >
            <it.Icon />
            {it.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Explorer
