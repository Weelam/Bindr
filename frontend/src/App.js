import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import FindPage from "./pages/FindPage";
import Home from "./pages/Home";
import Navbar from "./components/NavBar/Navbar";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import data from "./users.json";

const users = data["data"];

function App() {
  // remember to change this part!!! (rn "user" is signed in at the start
  const [currentUser, setCurrentUser] = useState(users[0]); // user object
  const [username, setUsername] = useState("user"); // username of the user (used to change "currentUser" state)
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    // change currentUser whenever username changes
    if (auth) {
      const authUser = users.filter((item) => item["username"] === username)[0];
      if (authUser) {
        setCurrentUser(authUser);
      } else {
        console.error("Bro can't find user with username, username")
      }
    }
  }, [username]);

  return (
    <div className="App">
      {username}
      {currentUser["username"]}
      <p style={{ backgroundColor: "#ddd", margin: 0 }}>
        {auth ? "logged in" : "not logged in" + currentUser["username"]}
      </p>
      <Router>
        <Navbar auth={auth} />
        <Switch>
          {/* not secure atm, we'll add that in phase 2 */}
          <Route exact path="/">
            {!auth ? <Redirect to="/" /> : <DashboardPage currentUser={currentUser} />}
          </Route>
          <Route path="/login">
            <LoginPage
              currentUser={currentUser}
              changeCurrentUser={setCurrentUser}
              setAuth={setAuth}
            />
          </Route>
          <Route path="/find">
            {!auth ? (
              <Redirect to="/login" />
            ) : (
              <FindPage
                users={users}
                currentUserSet={{"currentUser": currentUser, "setCurrentUser": setCurrentUser}}
              />
            )}
          </Route>
          <Route path="/review"></Route>
          <Route path="/dashboard">
            <DashboardPage currentUser={currentUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
