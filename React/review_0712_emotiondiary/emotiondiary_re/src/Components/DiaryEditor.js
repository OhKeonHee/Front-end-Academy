import React, { useState, useRef } from 'react'

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });
  const handleChangeState = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = () => {
    if(state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if(state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion)
    // console.log(state);
  }
  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기</h2>
      <div>
        <input ref={authorInput} name='author' value={state.author} onChange={handleChangeState} placeholder='작성자' type='text' />
      </div>
      <div>
        <textarea ref={contentInput} name='content' value={state.content} onChange={handleChangeState} placeholder='일기' type='text'/>
      </div>
      <div>
        <span>오늘의 감정점수: </span>
        <select name='emotion' value={state.emotion} onChange={handleChangeState}>
          <option value={1}>😁</option>
          <option value={2}>😎</option>
          <option value={3}>😍</option>
          <option value={4}>😥</option>
          <option value={5}>😭</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  )
}

export default DiaryEditor