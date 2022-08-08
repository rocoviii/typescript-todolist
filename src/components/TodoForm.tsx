import React, { useState } from "react";
import TodoFormStyled from "./TodoForm.styled";
import { useTodosDispatch } from "../contexts/TodosContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "CREATE", text: value });
    setValue("");
  };
  return (
    <TodoFormStyled onSubmit={onSubmit} className="todoForm">
      <input
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button>등록</button>
    </TodoFormStyled>
  );
}

export default TodoForm;
