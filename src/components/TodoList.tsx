import React from "react";
import TodoItem from "./TodoItem";
import TodoListStyled from "./TodoList.styled";
import { useTodosState } from "../contexts/TodosContext";

function TodoList() {
  const todos = useTodosState();

  return (
    <TodoListStyled className="todoList">
      {todos.length === 0 ? (
        <span>오늘 할 일을 등록하세요!</span>
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </TodoListStyled>
  );
}

export default TodoList;
