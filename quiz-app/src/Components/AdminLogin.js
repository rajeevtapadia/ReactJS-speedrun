import React, { useState } from "react";
import "../assets/AdminLogin.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import LoginPage from "./LoginPage.js";

function App() {
  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
