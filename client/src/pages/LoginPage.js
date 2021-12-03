import React from "react";
import Login from "../components/Login/Login";

function LoginPage({setCurrentUser, setIsAdmin }) {

  return (
    <Login setCurrentUser={setCurrentUser} setIsAdmin={setIsAdmin}/>
  );
}

export default LoginPage;
