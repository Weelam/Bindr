import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindPage from "./pages/FindPage";
import Home from "./pages/Home";
import Navbar from "./components/NavBar/Navbar";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  // user(email probably) is gonna be unique, we can use that to fetch users info
  // default value is "", this means they're not signed in
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar auth={auth} />
        {user}
        {auth ? "logged in" : "not logged in"}
        <Switch>
          <Route exact path="/">
            {!auth ? (
              <Home user={user} changeUser={setUser} />
            ) : (
              <FindPage user={user} changeUser={setUser} />
            )}
          </Route>
          <Route path="/login">
            <LoginPage user={user} changeUser={setUser} setAuth={setAuth} />
          </Route>
          <Route path="/find">
            <FindPage user={user} changeUser={setUser} />
          </Route>
          <Route path="/review"></Route>
          <Route path="/dashboard">
            <DashboardPage user={user}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
