import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Login from "../components/Login/Login";

function LoginPage({ currentUser, setUsername, setAuth }) {

  return (
    <Login setUsername={setUsername}/>
  );
}

export default LoginPage;
