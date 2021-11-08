import React from "react";
import Login from "../components/Login/Login";

function LoginPage({setUsername, setIsAdmin }) {

  return (
    <Login setUsername={setUsername} setIsAdmin={setIsAdmin}/>
  );
}

export default LoginPage;
