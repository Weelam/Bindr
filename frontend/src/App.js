import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import FindPage from "./pages/FindPage/FindPage";
import Home from "./pages/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import data from "./users.js";
import groupsData from "./groups.js";
// This is the mock data from users.json, and it will be passed around as a prop through out the application
// each user already has a list of courses, which we will pull externally
const users = data["data"]; 
const groups = groupsData["data"];
function App() {
  // remember to change this part!!! (rn "user" is signed in at the start
  const [currentUser, setCurrentUser] = useState(users[0]); // user object
  const [username, setUsername] = useState("user"); // username of the user (used to change "currentUser" state)
  const [auth, setAuth] = useState(false);
  const [availableProjects, setAvailableProjects] = useState([]);
  const [allGroups, setGroups] = useState(groups);
  const [allUsers, setUsers] = useState(users);
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
      console.log("logged out")
      setCurrentUser({});
      setAuth(false)
    }
  }, [username]);
  function updateUser(id, user){
    let copy = [...allUsers];
    copy[parseInt(id) - 1] = user;
    setUsers(copy);
  }

  useEffect(() => {
    setAvailableProjects(
      groups.filter((proj)=>{
          return currentUser.groups.includes(parseInt(proj.groupID));
      })
  );
  }, currentUser)

  function updateGroup(id, group){
    let copy = [...allGroups];
    console.log(copy[id].list.length)

    copy[parseInt(id)] = group;
    
    console.log(copy[id].list.length)

    setGroups(copy);
    setAvailableProjects(copy.filter((proj)=>{
      return currentUser.groups.includes(proj.groupID);
  }));
    console.log("updated group~")
  }
  const logout = () => {
    setUsername("");
    console.log("logout")
    return (<Redirect to="/"/>)
  }

  return (
    <div className="App">
      <Router>
        <Navbar auth={auth} logout={logout}/>
        <Switch>
          {/* not secure atm, we'll add that in phase 2 */}
          <Route exact path="/">
          {!auth ? <Home /> : <DashboardPage currentUser={currentUser} 
                users={users} groups={availableProjects} updateGroup={updateGroup} updateUser = {updateUser}/>}
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
          
    
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
