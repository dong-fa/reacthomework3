import React, { useEffect } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { __getTodos, clearTodo } from "../redux/modules/todoSlice";

const Info = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const info = todo.find((info) => info.id === parseInt(id));

  useEffect(() => {
    dispatch(__getTodos(id));
    return () => dispatch(clearTodo());
  }, [dispatch, id]);

  return (
    <div>
      <Header />
      <InfoHeader>
        <h2>id : {id}</h2>
        <div
          onClick={() => {
            navigate(`/list`);
          }}
        >
          이전으로
        </div>
      </InfoHeader>
      <div>
        <TextBox1>{info?.title}</TextBox1>
        <TextBox2>{info?.body}</TextBox2>
      </div>
      <EditButton>
        <button>수정하기</button>
      </EditButton>
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
