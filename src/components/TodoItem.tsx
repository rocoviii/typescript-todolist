import React from "react";
import TodoItemStyled from "./TodoItem.styled";
import { useTodosDispatch, Todo, useTodosState } from "../contexts/TodosContext";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

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

  const onDragEnd = () => {
    dispatch({ type: "DRAG", id: todo.id });
  };

  const todos = useTodosState();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="TodoItem">
        {todos.map({todo}, index) => (
          <Draggable key={todo.id} draggableId={todo.id}>
          {(provided) => (
            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.draggableProps}>
              <TodoItemStyled
                className="TodoItem"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div className={`ItemContent ${todo.done ? "done" : ""}`}>
                  <span onClick={onToggle}>{todo.text}</span>
                </div>
                <div className="ItemBtn">
                  <span onClick={onRemove}>삭제</span>
                </div>
                <div>
                  <span onClick={onDragEnd}>*</span>
                </div>
              </TodoItemStyled>
            </li>
          )}
        </Draggable>
        )}
      </Droppable>
    </DragDropContext>
  );

        }
export default TodoItem;