import React from 'react'
import { useSelector } from 'react-redux'

const GrandBox = () => {
  let count = useSelector((state) => state.count)
  return (
    <div>
      GrandBox {count}
    </div>
  )
}

export default GrandBox
