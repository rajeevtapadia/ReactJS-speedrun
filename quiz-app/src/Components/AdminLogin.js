import React, { useState } from "react";
import "../assets/AdminLogin.css";
import LoginPage from "./LoginPage.js";

function AdminLogin({ setAdmin }) {
  return (
    <>
      <LoginPage setUser={setAdmin} />
    </>
  );
}

export default AdminLogin;
