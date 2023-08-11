import React from 'react'
import { useSelector } from 'react-redux'
import ChildBox from './ChildBox'

const Box = () => {
  // 👇 Props 없이 값을 가져와 버림 ㄷ
  let count = useSelector((state) => state.count)
  return (
    <div>
      This is Box! {count}
      <ChildBox />
    </div>
  )
}

export default Box

