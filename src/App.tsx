import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { TodoscontextProvider } from "./contexts/TodosContext";

const Rootdiv = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <TodoscontextProvider>
      <GlobalStyle />
      <Rootdiv>
        <TodoForm />
        <TodoList />
      </Rootdiv>
    </TodoscontextProvider>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
      margin: 0;
  }
`;
