import React, { useMemo, useState } from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("")
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }
  const getSearchResult = () => {
    return search === "" ? todo : todo.filter((it) => 
      it.content.toLowerCase().includes(search.toLowerCase())
    )
  }
  // const value = useMemo(callback, [])
  // > 의존성 배열의 값이 변할 때만 callback함수를 실행시킴
  const analyzeTodo = useMemo(() => {
    console.log('analyzeTodo 함수 호출')
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount, 
      doneCount, 
      notDoneCount,
    };
  }, [todo])
  const {totalCount, doneCount, notDoneCount} = analyzeTodo; // 값을 반환
  return (
    <div className='TodoList'>
      <h4>Todo List 👇</h4>
      <div>
        <div>총 개수: {totalCount}</div>
        <div>완료한 일: {doneCount}</div>
        <div>아직 완료하지 못한 일: {notDoneCount}</div>
      </div>
      <input className='searchbar' placeholder='검색어를 입력하세요.' value={search} onChange={onChangeSearch} />
      <div className='list_wrapper'>
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} onUpdate={onUpdate} onDelete={onDelete} {...it} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
