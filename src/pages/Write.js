import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { __getTodos } from "../redux/modules/todosSlice";

const Write = () => {
  const [todos, setTodos] = useState({ user: "", title: "", body: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodos({
      ...todos,
      [name]: value,
    });
    console.log(todos); // input값 확인용
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      todos.user.trim() === "" ||
      todos.title.trim() === "" ||
      todos.body.trim() === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    }
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
            value={todos.user}
            placeholder="이름을 입력해주세요."
            maxLength={5}
            onChange={onChangeHandler}
          ></input>
          <h3>제목</h3>
          <input
            type="text"
            name="title"
            value={todos.title}
            placeholder="제목을 입력해주세요."
            maxLength={10}
            onChange={onChangeHandler}
          ></input>
          <h3>내용</h3>
          <input
            type="text"
            name="body"
            value={todos.body}
            placeholder="내용을 입력해주세요."
            maxLength={200}
            onChange={onChangeHandler}
          ></input>
        </form>
        <button>추가하기</button>
      </div>
    </div>
  );
};

export default Write;
