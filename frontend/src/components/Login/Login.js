import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./loginStyle.css";

const Login = ({ setUsername }) => {
  const [info, setInfo] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // check for user authentications
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
      <h1> Login to Your Account </h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            onChange={(e) => setInfo({ ...info, username: e.target.value })}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
