// 상태 최적화 : 어떠한 상태를 최고의 단계로 업그레이드 해놓는 것, 웹 서비스 성능을 개선하는 것
// useMemo() 기능을 활용한 방법을 "메모이제이션" 기법
// useMemo (callback, 의존성 배열)

import { useState, useMemo } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate, onDelete }: any) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const getSearchResult = () => {
    return search === "" ? todo : todo.filter((it: any) => it.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    
    const doneCount = todo.filter((it: any) => it.isDone).length
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  } , [todo]);

  const {totalCount, doneCount, notDoneCount} = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 일 : {doneCount}</div>
        <div>아직 해야할 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it: any) => (
          <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;