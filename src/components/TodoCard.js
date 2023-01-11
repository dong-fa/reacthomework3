import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TodoCard = ({ todo }) => {
  const navigate = useNavigate();
  return (
    <CardBox
      onClick={() => {
        navigate(`/info/${todo.id}`);
      }}
    >
      <StTextBox>
        <h2>{todo.title}</h2>
        <button>삭제</button>
      </StTextBox>
      <div>작성자 : {todo.user}</div>
    </CardBox>
  );
};

export default TodoCard;

const CardBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 0px 10px 0px;
  padding: 10px;
`;

const StTextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
