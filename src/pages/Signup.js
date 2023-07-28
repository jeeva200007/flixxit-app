import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import { firebaseAuth } from "../utils/firebase-config";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [mailPass, setMailPass] = useState(false);
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });

  const handleSignin = async () => {
    try {
      const { email, password } = formVal;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  }, [navigate]);
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimed Movies, TV Shows and More</h1>
            <h4>Watch and Enjoy</h4>
            <h6>Create an account or restart membership</h6>
          </div>
          <form className="form">
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              autoComplete="email"
              value={formVal.email}
              onChange={(e) =>
                setFormVal({
                  ...formVal,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {mailPass && (
              <input
                className="password"
                type="password"
                placeholder="Enter Password"
                name="password"
                autoComplete="password"
                value={formVal.password}
                onChange={(e) =>
                  setFormVal({
                    ...formVal,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!mailPass && (
              <button className="startedbtn" onClick={() => setMailPass(true)}>
                Get Started
              </button>
            )}
          </form>
          <button onClick={handleSignin}>Sign Up</button>
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
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        padding: 1.5rem;
        font-size: 2rem;
        h1 {
          padding: 0.25rem;
        }
        h4 {
          padding: 0.25rem;
        }
        h6 {
          padding: 0.25rem;
        }
      }
      .form {
        display: grid;
        width: 30%;
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
      }
      .startedbtn {
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
      }
    }
  }
`;
