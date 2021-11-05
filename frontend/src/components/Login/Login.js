import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./loginStyle.css";

const Login = ({ setUsername }) => {
  const [info, setInfo] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // check for user authentications (pull from database)
    if (info["username"] === "user" && info["password"] === "user") {
      // change the global user of the application
      setUsername(info["username"]);
      history.push("/");
    } else {
      alert("username or password incorrect");
    }
  };

  return (
    <div className="loginRoot">
      <h1> Login </h1>
			<LoginForm handleSubmit={handleSubmit} info={info} setInfo={setInfo}/>
    </div>
  );
};

export default Login;
