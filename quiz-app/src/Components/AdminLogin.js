import React, { useState } from "react";
import "../assets/AdminLogin.css";
import LoginPage from "./LoginPage.js";

function AdminLogin() {
  const [admin, setAdmin] = useState("");

  return (
    <>
      <LoginPage setUser={setAdmin} />
    </>
  );
}

export default AdminLogin;
