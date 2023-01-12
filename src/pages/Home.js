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
        <div>
          <h1>환장의 투두 </h1>
          <div>
            <Writebtn
              onClick={() => {
                navigate("/write");
              }}
            >
              작성하기
            </Writebtn>
          </div>
          <div>
            <Writebtn
              onClick={() => {
                navigate("/list");
              }}
            >
              게시판 가기
            </Writebtn>
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
  justify-content: center;

  height: calc(100vh - 45px);

  display: flex;
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
