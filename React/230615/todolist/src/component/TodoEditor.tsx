import "./TodoEditor.css";
import { useState, useRef } from "react";

const TodoEditor = ({ onCreate }: any) => {
  const [content, setContent] = useState("");
  const inputRef = useRef<any>(null);

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 🎈</h4>
      <div className="editor_wrapper">
        <input type="text" placeholder="새로운 Todo..." value={content} onChange={onChangeContent} ref={inputRef} onKeyDown={onKeyDown}/>
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

export default TodoEditor;