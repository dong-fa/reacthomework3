import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <HomeContainer>
        <div>Home</div>
        <div>
          <div>
            <button
              onClick={() => {
                navigate("/write");
              }}
            >
              작성하기
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/list");
              }}
            >
              게시판 가기
            </button>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
};

export default Home;

const HomeContainer = styled.div`
  border: 1px solid black;
  margin-top: 50px;
  display: flex;

  height: calc(100vh - 45px);

  display: flex;
`;
