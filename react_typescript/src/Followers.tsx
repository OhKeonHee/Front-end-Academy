import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Followers = () => {
  const ctx = useOutletContext();
  console.log(ctx);
  return (
    <div>
      <h1>Followers</h1>
    </div>
  )
}

export default Followers
