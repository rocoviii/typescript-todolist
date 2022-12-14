import styled from "styled-components";

const TodoItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 45px;
  font-family: "Noto Sans KR", sans-serif;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin-bottom: 5px;
  .done {
    color: #999999;
    text-decoration: line-through;
  }

  .ItemIndex {
    display: flex;
    width: 5%;
    height: 100%;
    align-items: center;
  }

  .ItemContent {
    display: flex;
    width: 85%;
    height: 100%;
    align-items: center;
    span {
      cursor: pointer;
    }
  }

  .ItemBtn {
    display: flex;
    width: 10%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: red;
    cursor: pointer;
  }
`;

export default TodoItemStyled;
