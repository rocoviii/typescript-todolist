import React from "react";
import TodoItem from "./TodoItem";
import TodoListStyled from "./TodoList.styled";
import { useTodosState } from "../contexts/TodosContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TodoList() {
  const todos = useTodosState();
  const onDragEnd = (e) => {
    if (!e.destination) {
      return;
    }
  };
  return (
    <TodoListStyled className="todoList">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {todos.length === 0 ? (
                <span>오늘 할 일을 등록하세요!</span>
              ) : (
                todos.map((todo, index) => (
                  <TodoItem todo={todo} key={todo.id} />
                ))
              )}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </TodoListStyled>
  );
}

export default TodoList;
