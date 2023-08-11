import React from 'react'
import { users } from './db';
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams.get('geo'));
  // 3초뒤에 주소가 바뀜, useSearchParams는 주소를 가져올 뿐 아니라 편집도 가능하기 때문
  setTimeout(() => {
    setSearchParams({
      day: 'today',
      tomorrow: '123'
    })
  }, 3000)
  return (
    <div>
      <ul>
        {users.map((user) => 
          (<li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
