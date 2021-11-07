import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Login from "../components/Login/Login";

function LoginPage({setUsername, setIsAdmin }) {

  return (
    <Login setUsername={setUsername} setIsAdmin={setIsAdmin}/>
  );
}

export default LoginPage;
