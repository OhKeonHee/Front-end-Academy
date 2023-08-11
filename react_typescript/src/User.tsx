import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { users } from './db';
import { Outlet } from 'react-router-dom';
import Followers from './Followers';

const User = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>User with it{userId} is name: {users[Number(userId) - 1].name}</h1>
      <hr />
      <Link to='followers'>See Followers</Link>
      <Outlet context={{
        nameOfMyUsers: users[Number(userId) - 1].name,
      }} />
    </div>
    
  )
}

export default User
