import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignupForm from "./SignupForm";
import "./signupStyle.css";

const Signup = () => {
  const [info, setInfo] = useState({ name: "", username: "", password: "" });
  const history = useHistory();

  const handleSubmit = (e) => {
    if (info["name"] && info["username"] && info["password"]) {
      e.preventDefault();
      alert("submitted!");
      history.push("/login");
    } else {
			alert("fill in all the fields!")
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
