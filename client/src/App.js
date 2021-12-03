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
  const [currentUser, setCurrentUser] = useState(null); // user object
	const [users, setUsers] = useState(usersData)
  const [isAdmin, setIsAdmin] = useState(false);

  console.log(currentUser)
  useEffect(() => {
    if (!currentUser) {
      setIsAdmin(false)
    }
  }, [currentUser])

  return (
    <div className="App">
      <Router>
        {/* not secure atm, we'll add that in phase 2 */}
	
        {!isAdmin ? (
          <>
            <Navbar auth={currentUser ? true : false} isAdmin={isAdmin} />
            <Switch>
              <Route exact path="/">
                {!currentUser ? (
                  <Home />
                ) : (
                  // <DashboardPage
                  //   currentUser={currentUser}
                  //   users={users}
                  //   groups={groups}
                  // />
                  <Home/>
                )}
              </Route>

              <Route path="/login">
                <LoginPage setCurrentUser={setCurrentUser} setIsAdmin={setIsAdmin} />
              </Route>
              <Route path="/signup">
                <SignupPage/>
              </Route>

              <Route path="/find">
                {!currentUser ? (
                  <Redirect to="/login" />
                ) : (
                  <FindPage
                    users={users}
                    currentUser={currentUser}
                  />
                )}
              </Route>
            </Switch>
          </>
        ) : (
          <>
            <Navbar auth={currentUser ? true : false} isAdmin={isAdmin} />
            <Switch>
              <Route exact path="/">
                <AdminDashboard users={users} currentUser={currentUser} />
              </Route>
              <Route path="/reports">
                <AdminReports users={users} currentUser={currentUser} />
              </Route>
              <Route path="/users">
                <AdminUsers users={users} setUsers={setUsers} currentUser={currentUser} />
              </Route>
              <Route path="/courses">
                <AdminCourses users={users} currentUser={currentUser} />
              </Route>
              <Route path="/messages">
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