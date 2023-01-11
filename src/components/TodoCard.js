import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteTodos } from "../redux/modules/todosSlice";

const TodoCard = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDeleteHandler = (e) => {
    e.stopPropagation();
    const result = window.confirm("이 할일을 지울까요?");
    if (result) {
      return dispatch(__deleteTodos(todo.id));
    } else {
      return;
    }
  };

  return (
    <CardBox
      key={todo.id}
      todo={todo}
      onClick={() => {
        navigate(`/info/${todo.id}`);
      }}
    >
      <StTextBox>
        <h2>{todo.title}</h2>
        <div></div>
        <button onClick={onDeleteHandler}>삭제</button>
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
