import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindPage from "./pages/FindPage";
import Home from "./pages/Home";
import Navbar from "./components/NavBar/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/find">
            <FindPage />
          </Route>
          <Route path="/review"></Route>
          <Route path="/dashboard"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
