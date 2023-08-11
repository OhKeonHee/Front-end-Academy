import React from 'react'
import { useSelector } from 'react-redux'

const ChildBox = () => {
  let count = useSelector((state) => state.count)
  return (
    <div>
      I'm Child Box{count}
    </div>
  )
}

export default ChildBox
