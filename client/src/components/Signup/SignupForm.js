import React from "react";
import Button from '@mui/material/Button';

const SignupForm = ({ handleSubmit, info, setInfo }) => {
  return (
    <div className="SignupForm-root">
      <form>
        <label className="loginForm-input">
          <h5>Username</h5>
          <input
            required
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
        <br />
        <label className="loginForm-input">
          <h5>Year</h5>
          <select
          onChange={(e) => setInfo({ ...info, year: e.target.value })}
          >
            <option type="number">{1}</option>
            <option type="number">{2}</option>
            <option type="number">{3}</option>
            <option type="number">{4}</option>
          </select>
        </label>
        <br />
        <label className="loginForm-input">
          <h5>program</h5>
          <input
            
            type="text"
            onChange={(e) => setInfo({ ...info, program: e.target.value })}
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
