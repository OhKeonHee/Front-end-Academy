import React from 'react'
import { useState, useRef } from 'react'

const DiaryItem = ({ id, author, content, emotion, created_date, onDelete, onEdit }) => {
  const localContentInput = useRef(); // 간섭하기 위해 (만약 글자 수가 기준을 충족못할 때 작성할 수 없도록)
  const [localContent, setLocalContent] = useState(content) // 수정할 때 기존 컨텐츠 내용과 수정할 내용
  const [isEdit, setIsEdit] = useState(false)
  const toggleIsEdit = () => setIsEdit(!isEdit)

  const handleClickRemove = () => {
    if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id)
    }
  }
  const handleQuitEdit = () => {
    setIsEdit(false)
    setLocalContent(content)
  }
  const handleEdit = () => {
    if(localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if(window.confirm(`${id}번째 일기를 정말 수정하시겠습니까?`)) {
      onEdit(id, localContent)
      toggleIsEdit();
    }
  }
  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span className='author_info'>
          작성자: {author} | 감정점수: {emotion}
          <br />
          <span className='date'>{new Date(created_date).toLocaleString()}</span>
          <div className='content'>
            {isEdit ? 
              <textarea 
                ref={localContentInput}
                value={localContent} 
                onChange={(e) => setLocalContent(e.target.value)} 
              /> 
              : content}
          </div>
          {isEdit ? (
            <>
              <button onClick={handleQuitEdit}>수정취소</button>
              <button onClick={handleEdit}>수정완료</button>
            </>
          ) : (
            <>
              <button onClick={handleClickRemove}>삭제하기</button>
              <button onClick={toggleIsEdit} isEdit={isEdit}>수정하기</button>
            </>
          )}
        </span>
      </div>
    </div>
  )
}

export default DiaryItem
