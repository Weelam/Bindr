import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignupForm from "./SignupForm";
import "./signupStyle.css";
import { signup } from "../../actions/user";
const Signup = () => {
  const [info, setInfo] = useState({
    name: "",
    username: "",
    password: "",
    year: null,
    program: "",
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof info["year"], info["year"])
    if (
      info["name"] &&
      info["username"] &&
      info["password"] &&
      info["year"] &&
      info["program"]
    ) {
      signup(info, history);
    } else {
      alert("Please fill all the forms!")
    }
  };

  return (
    <div className="loginRoot">
      <h1> Signup </h1>
      <SignupForm handleSubmit={handleSubmit} info={info} setInfo={setInfo} />
    </div>
  );
};

export default Signup;
