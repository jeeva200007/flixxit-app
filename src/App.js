import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Flixxit from "./pages/Flixxit";
import Player from "./pages/Player";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/" element={<Flixxit />} />
        <Route exact path="/player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}
