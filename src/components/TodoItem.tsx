import React from "react";
import TodoItemStyled from "./TodoItem.styled";
import { useTodosDispatch, Todo } from "../contexts/TodosContext";

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({ type: "TOGGLE", id: todo.id });
  };
  const onRemove = () => {
    dispatch({ type: "REMOVE", id: todo.id });
  };

  return (
    <TodoItemStyled className="TodoItem">
      <div className={`ItemContent ${todo.done ? "done" : ""}`}>
        <span onClick={onToggle}>{todo.text}</span>
      </div>
      <div className="ItemBtn">
        <span onClick={onRemove}>삭제</span>
      </div>
    </TodoItemStyled>
  );
}

export default TodoItem;
