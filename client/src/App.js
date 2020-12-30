import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Dashboard from "./pages/Dashboard/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Create from "./pages/CreateNewPDF/index";
import ProfilePage from "./pages/ProfilePage/index";
import Saved from "./pages/Saved/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CssBaseline />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/saved" component={Saved} />
            <Route path="/create" component={Create} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

