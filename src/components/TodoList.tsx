import React from "react";
import TodoItem from "./TodoItem";
import TodoListStyled from "./TodoList.styled";
import { useTodosState } from "../contexts/TodosContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TodoList() {
  const todos = useTodosState();

  return (
    <DragDropContext>
      <Droppable draggableId="todoList">
        {(provided) => (
          <TodoListStyled
            className="todoList"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.length === 0 ? (
              <span>오늘 할 일을 등록하세요!</span>
            ) : (
              todos.map((todo, index) => (
                <Droppable key={todo} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem todo={todo} key={todo.id} />
                    </li>
                  )}
                </Droppable>
              ))
            )}
          </TodoListStyled>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TodoList;
