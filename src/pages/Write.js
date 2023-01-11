import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { __addTodo, __getTodos } from "../redux/modules/todosSlice";
import { useNavigate } from "react-router-dom";

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
      <div>Write</div>
      <div>
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
      </div>
    </div>
  );
};

export default Write;
