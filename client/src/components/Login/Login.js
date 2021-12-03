import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./loginStyle.css";
import { login } from "../../actions/user";

const Login = ({setCurrentUser, setIsAdmin }) => {
  const [info, setInfo] = useState({ username: "", password: "" });
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(info, setCurrentUser)
    console.log("submitted log in")
    history.push("/")
  };

  return (
    <div className="loginRoot">
      <h1> Login </h1>
			<LoginForm handleSubmit={handleSubmit} info={info} setInfo={setInfo}/>
    </div>
  );
};

export default Login;
