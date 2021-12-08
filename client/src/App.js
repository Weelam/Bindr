import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import FindPage from "./pages/FindPage/FindPage";
import Home from "./pages/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import data from "./users.js";
import groupsData from "./groups.js";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminReports from "./pages/Admin/AdminReports";
import AdminCourses from "./pages/Admin/AdminCourses";
import AdminMessages from "./pages/Admin/AdminMessages";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { checkSession } from "./actions/user";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [currentUser, setCurrentUser] = useState(null); // user object
  const [isAdmin, setIsAdmin] = useState(false);

  console.log(currentUser);
  useEffect(() => {
    if (!currentUser) {
      setIsAdmin(false);
    }
  }, [currentUser]);

  useEffect(() => {
    console.log("check session");
    checkSession(setCurrentUser);
  });

  return (
    <div className="App">
      <CssBaseline />
      <Router>
        {/* not secure atm, we'll add that in phase 2 */}

        {!isAdmin ? (
          <>
            <Navbar
              auth={currentUser ? true : false}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              isAdmin={isAdmin}
            />
            <Switch>
              <Route exact path="/">
                {!currentUser ? (
                  <Home />
                ) : (
                  <DashboardPage currentUser={currentUser} />
                )}
              </Route>

              <Route path="/login">
                <LoginPage
                  setCurrentUser={setCurrentUser}
                  setIsAdmin={setIsAdmin}
                />
              </Route>
              <Route path="/signup">
                <SignupPage />
              </Route>

              <Route path="/find">
                {!currentUser ? (
                  <Redirect to="/login" />
                ) : (
                  <FindPage  currentUser={currentUser} />
                )}
              </Route>
              <Route path="/profile">
                {!currentUser ? (
                  <Redirect to="/login" />
                ) : (
                  <ProfilePage
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                )}
              </Route>
            </Switch>
          </>
        ) : (
          <>
            <Navbar
              auth={currentUser ? true : false}
              currrentUser={currentUser}
              setCurrentUser={setCurrentUser}
              isAdmin={isAdmin}
            />
            <Switch>
              <Route exact path="/">
                <AdminDashboard currentUser={currentUser} />
              </Route>
              <Route path="/reports">
                <AdminReports currentUser={currentUser} />
              </Route>
              <Route path="/users">
                <AdminUsers currentUser={currentUser} />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
