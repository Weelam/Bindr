import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindPage from "./pages/FindPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/find">
            <FindPage />
          </Route>
          <Route path="/dashboard"></Route>
          <Route path="/1"></Route>
          <Route path="/2"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
