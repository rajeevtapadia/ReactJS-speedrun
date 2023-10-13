import React, { useState } from "react";
import "../assets/AdminLogin.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import LoginPage from "./LoginPage.js";

function AdminLogin() {
  const [admin, setAdmin] = useState("");
  function signupHandler() {}

  function loginHandler() {}

  return (
    <>
      <LoginPage setUser={setAdmin} />
    </>
  );
}

export default AdminLogin;
