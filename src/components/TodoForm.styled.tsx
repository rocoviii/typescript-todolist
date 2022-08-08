import styled from "styled-components";

const TodoFormStyled = styled.form`
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
  input {
    display: flex;
    width: 30%;
    height: 34px;
    outline: none;
    padding-left: 10px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
  }
  button {
    display: flex;
    width: 5%;
    height: 40px;
    outline: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
  }
`;

export default TodoFormStyled;
