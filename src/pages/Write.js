import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { __addTodo, __getTodos } from "../redux/modules/todosSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Write = () => {
  const [todo, setTodo] = useState({ user: "", title: "", body: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
    console.log(todo); // input값 확인용
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      todo.user.trim() === "" ||
      todo.title.trim() === "" ||
      todo.body.trim() === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(__addTodo(todo));
    setTodo({ title: "", body: "", user: "" });
    navigate(`/list`);
  };

  return (
    <div>
      <Header />
      <div>
        <h1>환장거리를 적어주세요.</h1>
        <WriteBox>
          <form onSubmit={onSubmitHandler}>
            <h3>작성자</h3>
            <input
              type="text"
              name="user"
              value={todo.user}
              placeholder="이름을 입력해주세요."
              maxLength={5}
              onChange={onChangeHandler}
            ></input>
            <h3>제목</h3>
            <input
              type="text"
              name="title"
              value={todo.title}
              placeholder="제목을 입력해주세요."
              maxLength={10}
              onChange={onChangeHandler}
            ></input>
            <h3>내용</h3>
            <input
              type="text"
              name="body"
              value={todo.body}
              placeholder="내용을 입력해주세요."
              maxLength={200}
              onChange={onChangeHandler}
            ></input>
            <div>
              <button>추가하기</button>
            </div>
          </form>
        </WriteBox>
      </div>
    </div>
  );
};

export default Write;

const WriteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Writebtn = styled.div`
  border: 1px solid black;
  margin: 20px auto;

  height: 100px;
  width: 500px;

  font-size: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
