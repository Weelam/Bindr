import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import FindPage from "./pages/FindPage/FindPage";
import Home from "./pages/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import data from "./users.js";
import groupsData from "./groups.js";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminReports from "./pages/Admin/AdminReports";
import AdminCourses from "./pages/Admin/AdminCourses";
import AdminMessages from "./pages/Admin/AdminMessages";
import SignupPage from "./pages/SignupPage";
// This is the mock data from users.json, and it will be passed around as a prop through out the application
// each user already has a list of courses, which we will pull externally
const usersData = data["data"];
const groups = groupsData["data"];

function App() {
  const [currentUser, setCurrentUser] = useState(); // user object
	const [users, setUsers] = useState(usersData)
	const [username, setUsername] = useState(""); // username of the user (used to change "currentUser" state)
  const [auth, setAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // change currentUser whenever username changes
    if (username) {
      const authUser = users.filter((item) => item["username"] === username)[0];
      console.log(authUser);
      if (authUser) {
        setCurrentUser(authUser);
        setAuth(true);
      } else {
        console.error("Bro can't find user with username, username");
      }
    } else {
      console.log("logged out");
      setCurrentUser({});
      setAuth(false);
    }
  }, [username]);

  const logout = () => {
    setUsername("");
    console.log("logout");
    if (isAdmin) setIsAdmin(false);
  };

  return (
    <div className="App">
      <Router>
        {/* not secure atm, we'll add that in phase 2 */}
	
        {!isAdmin ? (
          <>
            <Navbar auth={auth} logout={logout} isAdmin={isAdmin} />
            <Switch>
              <Route exact path="/">
                {!auth ? (
                  <Home />
                ) : (
                  <DashboardPage
                    currentUser={currentUser}
                    users={users}
                    groups={groups}
                  />
                )}
              </Route>

              <Route path="/login">
                <LoginPage setUsername={setUsername} setIsAdmin={setIsAdmin} />
              </Route>
              <Route path="/signup">
                <SignupPage/>
              </Route>

              <Route path="/find">
                {!auth ? (
                  <Redirect to="/login" />
                ) : (
                  <FindPage
                    users={users}
                    currentUserSet={{
                      currentUser: currentUser,
                      setCurrentUser: setCurrentUser,
                    }}
                  />
                )}
              </Route>
            </Switch>
          </>
        ) : (
          <>
            <Navbar auth={auth} logout={logout} isAdmin={isAdmin} />
            <Switch>
              <Route exact path="/">
                <AdminDashboard users={users} currentUser={currentUser} />
              </Route>
              <Route exact path="/reports">
                <AdminReports users={users} currentUser={currentUser} />
              </Route>
              <Route exact path="/users">
                <AdminUsers users={users} setUsers={setUsers} currentUser={currentUser} />
              </Route>
              <Route exact path="/courses">
                <AdminCourses users={users} currentUser={currentUser} />
              </Route>
              <Route exact path="/messages">
                <AdminMessages users={users} currentUser={currentUser} />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;