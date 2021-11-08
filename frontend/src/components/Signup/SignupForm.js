import React from "react";
import Button from '@mui/material/Button';

const SignupForm = ({ handleSubmit, info, setInfo }) => {
  return (
    <div className="SignupForm-root">
      <form>
        <label className="loginForm-input">
          <h5>Username</h5>
          <input
            type="text"
            onChange={(e) => setInfo({ ...info, username: e.target.value })}
          />
        </label>
        <br/>
        <label className="loginForm-input">
          <h5>Name</h5>
          <input
            type="text"
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </label>
        <br />
        <label className="loginForm-input">
          <h5>Password</h5>
          <input
            type="text"
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
          />
        </label>
        <div className="loginForm-submit">
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Sign up!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
