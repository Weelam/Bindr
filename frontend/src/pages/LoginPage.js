import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

function LoginPage({ currentUser, changeCurrentUser, setAuth }) {
  const [info, setInfo] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // check for user authentications
    if (info["username"] === "user" && info["password"] === "user") {
      // change the global user of the application
      changeCurrentUser(info["username"]);
			setAuth(true)
			history.push("/")

    } else {
      alert("username or password incorrect");
    }
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            name="isGoing"
            type="text"
            onChange={(e) => setInfo({ ...info, username: e.target.value })}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="numberOfGuests"
            type="text"
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
          />
        </label>
				<button type="submit" onClick={handleSubmit}> Login </button>
      </form>

    </div>
  );
}

export default LoginPage;
