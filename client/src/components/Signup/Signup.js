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
    year: 1,
    program: "",
    profileImg: "https://cdn.digg.com/wp-content/uploads/2021/11/08135427/Screen-Shot-2021-11-08-at-8.54.17-AM.jpg"
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
