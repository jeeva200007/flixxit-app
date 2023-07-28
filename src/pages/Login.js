import React, { useEffect } from "react";
import styled from "styled-components";
import LogBackgroundImage from "../components/LoginBackImg";
import Header from "../components/Header";
import { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  }, [navigate]);
  return (
    <Container>
      <LogBackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="text flex column">
              <form className="form-list">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <input
                  className="password"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  autoComplete="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button
                  className="loginbtn"
                  onClick={(e) => handleLogin(e.preventDefault())}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  .form-list {
    display: grid;
    width: 30%;
    margin-left: 3rem;
    margin-bottom: 50px;
  }
  .title {
    h3 {
      padding: 20px;
      margin-left: 3rem;

      margin-bottom: 20px;
    }
  }
  input {
    color: black;
    border: none;
    padding: 1rem;
    font-size: 1.2rem;
    border: 1px solid black;
    border-radius: 7px;
    &:focus {
      outline: none;
    }
  }
  .password {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .loginbtn {
    padding: 10px;
    background-color: #f70f0f;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bolder;
    font-size: 1.05rem;
    color: #fff;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10rem;
  }
`;
