import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈
      </button>
      <div>
        <h1>모두의 Todo</h1>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;

  border: 1px solid black;
  padding: 10px;
`;
