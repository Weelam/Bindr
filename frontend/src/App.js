import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindPage from "./pages/FindPage";
import Home from "./pages/Home";
import Navbar from "./components/NavBar/Navbar";
import LoginPage from "./pages/LoginPage";

function App() {
  // user(email probably) is gonna be unique, we can use that to fetch users info
  // default value is "", this means they're not signed in
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <p style={{backgroundColor: "#ddd", margin: 0}}>
      {user}
      {auth ? "logged in" : "not logged in"}</p>
      <Router>
        <Navbar auth={auth} />

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
          <Route path="/dashboard"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
