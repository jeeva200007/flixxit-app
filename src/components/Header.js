import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.jpg";
export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign up"}
      </button>
    </Container>
  );
}
const Container = styled.div`
  .logo {
    img {
      height: 10rem;
    }
  }
  button {
    padding: 10px;
    background-color: #f70f0f;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bolder;
    font-size: 1.05rem;
    color: #fff;
    justify-content: space-between;
    margin-left: 80rem;
  }
`;
