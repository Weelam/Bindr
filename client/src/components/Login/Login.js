import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./loginStyle.css";
import { login } from "../../actions/user";

const Login = ({ setCurrentUser, setIsAdmin }) => {
  const [info, setInfo] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(info, setCurrentUser);
    if (res.login) {
      // console.log(res)
      history.push("/");
    } else {
      alert(res.message)
    }
  };

  return (
    <div className="loginRoot">
      <h1> Login </h1>
      <LoginForm handleSubmit={handleSubmit} info={info} setInfo={setInfo} />
    </div>
  );
};

export default Login;
