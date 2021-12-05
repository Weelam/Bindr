import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignupForm from "./SignupForm";
import "./signupStyle.css";
import { signup } from "../../actions/user";
const Signup = () => {
  const [info, setInfo] = useState({ name: "", username: "", password: "", year: 0, program: ""});
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(info, history)
  };

  return (
    <div className="loginRoot">
      <h1> Signup </h1>
      <SignupForm handleSubmit={handleSubmit} info={info} setInfo={setInfo} />
    </div>
  );
};

export default Signup;
