import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import DiaryEditor from './Components/DiaryEditor';
import DiaryList from './Components/DiaryList';
import Lifecycle from './Components/Lifecycle';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(1);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current += 1; // 일기가 만들어질때마다 id값을 1씩 올리기 위한 증감연산자
    setData([newItem, ...data])
  }
  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId)
    setData(newDiaryList)
  }
  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => (it.id === targetId ? {...it, content: newContent} : it)))
  }
  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
