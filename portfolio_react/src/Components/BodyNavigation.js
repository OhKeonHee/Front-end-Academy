import React from 'react'
import { useNavigate } from 'react-router-dom'

const BodyNavigation = ({ handleSelect, select, explorerBtn }) => {
  const navigate = useNavigate();
  return (
    <div className='BodyNavigation'>
      {explorerBtn.map((it, index) => (
          <button onClick={() => (
            navigate(`${it.navigate}`),
            handleSelect(it.id)
            )} 
            className={`${select === it.id ? 'select' : ''}`}
            key={index}
            >
            <svg viewBox='0 0 24 24' className='icon' fill={it.color}>
              <path d={it.path}></path>
            </svg>
            {it.name}
          </button>
        ))}
    </div>
  )
}

export default BodyNavigation
