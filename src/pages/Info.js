import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  __getTodos,
  clearTodo,
  __updateTodo,
} from "../redux/modules/todoSlice";

const Info = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = useSelector((state) => state.todo.todos);
  console.log(todo);
  const dispatch = useDispatch();
  // const info = todo.find((info) => info.id === parseInt(id));
  // console.log(info);

  const [isEditMode, setIsEditMode] = useState(false); // 붙여넣기
  const [updatedTodo, setUpdatedTodo] = useState(""); // 붙여넣기
  // 여기서부터 아래까지 붙여넣기 함
  useEffect(() => {
    setUpdatedTodo(todo.body);
  }, [todo]);

  useEffect(() => {
    dispatch(__getTodos(id));
    return () => dispatch(clearTodo());
  }, [dispatch, id]);

  const onSaveButtonHandler = () => {
    if (updatedTodo.trim() === "") {
      return alert("입력된 내용이 없습니다.");
    }
    dispatch(
      __updateTodo({
        ...todo,
        body: updatedTodo,
      })
    );
    setIsEditMode(false);
  };
  // 여기서부터 위까지 붙여넣기함

  return (
    <div>
      <Header />
      <InfoHeader>
        <h2>ID : ({todo?.id})</h2>
        <div
          onClick={() => {
            navigate(`/list`);
          }}
        >
          이전으로
        </div>
      </InfoHeader>
      <div>
        <TextBox1>{todo?.title}</TextBox1>
        {/* <TextBox2>{info?.body}</TextBox2> */}
        {/* 여기서 부터 아래까지 붙여넣기함 */}
        <TextBox2>
          {isEditMode ? (
            <div>
              <input
                name="body"
                value={updatedTodo}
                onChange={(event) => {
                  setUpdatedTodo(event.target.value);
                }}
              />
            </div>
          ) : (
            <div>{todo?.body}</div>
          )}
        </TextBox2>
        <EditButton>
          {isEditMode ? (
            <button onClick={onSaveButtonHandler}>저장</button>
          ) : (
            <button
              onClick={() => {
                setIsEditMode(true);
              }}
            >
              수정
            </button>
          )}
        </EditButton>
        {/* 여기서부터 위까지 붙여넣기 함 */}
      </div>
      {/* <EditButton>
        <button onClick={onEditHandler}>수정하기</button>
      </EditButton> */}
    </div>
  );
};

export default Info;

const InfoHeader = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
`;
const TextBox1 = styled.div`
  font-size: 32px;
  font-weight: 700;

  border: 1px solid green;
  padding-top: 20px;
  padding-left: 20px;

  align-items: initial;
`;
const TextBox2 = styled.div`
  font-size: 20px;
  font-weight: 700;

  border: 1px solid green;
  padding-top: 20px;
  padding-left: 20px;

  height: 400px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const EditButton = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
