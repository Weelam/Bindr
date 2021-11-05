import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import FindPage from "./pages/FindPage";
import Home from "./pages/Home";
import Navbar from "./components/NavBar/Navbar";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import data from "./users.js";

// This is the mock data from users.json, and it will be passed around as a prop through out the application
const users = data["data"]; 

function App() {
  // remember to change this part!!! (rn "user" is signed in at the start
  const [currentUser, setCurrentUser] = useState({}); // user object
  const [username, setUsername] = useState(""); // username of the user (used to change "currentUser" state)
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // change currentUser whenever username changes
    if (username) {
      const authUser = users.filter((item) => item["username"] === username)[0];
      console.log(authUser)
      if (authUser) {
        setCurrentUser(authUser);
        setAuth(true);
      } else {
        console.error("Bro can't find user with username, username")
      }
    } else {
      setCurrentUser({});
      setAuth(false)
    }
  }, [username]);

  const logout = () => {
    setUsername("");
    console.log("logout")
    return (<Redirect to="/" />)
  }
  return (
    <div className="App">
      <Router>
        <Navbar auth={auth} logout={logout}/>
        <Switch>
          {/* not secure atm, we'll add that in phase 2 */}
          <Route exact path="/">
            {!auth ? <Home /> : <DashboardPage currentUser={currentUser} users={users}/>}
          </Route>
          <Route path="/login">
            <LoginPage
              currentUser={currentUser}
              setUsername={setUsername}
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
          <Route path="/dashboard">
            <DashboardPage currentUser={currentUser} users={users}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
