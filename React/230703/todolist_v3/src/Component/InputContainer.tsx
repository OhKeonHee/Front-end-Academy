import React, { useState } from "react";
import { styled } from "styled-components";

import TodoInput from "./TodoInput";
import ShowInputButton from "./ShowInputButton";

// interface Props {
//   readonly onAdd: (todo: string) => void;
// }

const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false); // 할일 추가 버튼 안보이게(초기값)
  // const onClose = (todo: string) => {
  //   // onAdd(todo);
  //   setShowTodoInput(false);
  // };

  return (
    <>
      {/* {showTodoInput && <TodoInput onClose={onClose} />} */}
      {showTodoInput && <TodoInput />}

      <ShowInputButton
        show={showTodoInput}
        onClick={() => {
          setShowTodoInput(!showTodoInput);
        }}
      />
    </>
  );
};

export default InputContainer;