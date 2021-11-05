import React from "react";
import Button from '@mui/material/Button';

const LoginForm = ({ handleSubmit, info, setInfo }) => {
  return (
    <div className="loginForm-root">
      <form>
        <label className="loginForm-input">
          <h5>Username</h5>
          <input
            type="text"
            onChange={(e) => setInfo({ ...info, username: e.target.value })}
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
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
