import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { __getTodos } from "../redux/modules/todosSlice";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Header />
      <div>
        <h1>게시판</h1>
        <div>
          {todos.map((todo) => (
            <div type="button" key={todo.id}>
              {todo.user}
              {todo.title}
              {todo.body}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
