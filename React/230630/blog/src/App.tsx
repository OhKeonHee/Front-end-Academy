import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import { styled } from 'styled-components';
import Header from './Component/Header';
import BlogPost from './Component/BlogPost';
import mockPosts from './Mock/posts.json'
import Button from './Component/Button';

const Container = styled.div`
  background-color: #eee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`

interface Post {
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

function App() {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);
  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPosts);
    }, 1000)
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => 
    response
      .json()
      .then((json) => setPosts(json))
      .catch((error) => {
        console.error(error)
      })
    );
  }, []);


  return (
    <Container>
      <Header/>
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} body={post.body} />
      ))}
      <ButtonContainer>
        <Button label="등록"/>
      </ButtonContainer>
    </Container>
  );
}

export default App;
