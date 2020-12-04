import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// ADD Redirect above when login is done 
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Dashboard from "./pages/Dashboard/index";
import Create from "./pages/CreateNewPDF/index";
import Profile from "./pages/Profile/index";
import Saved from "./pages/Saved/index";
import NoMatch from "./pages/NoMatch/index";
import Footer from "./components/Footer";
import Login from "./pages/Login/index";
import SignUp from "./pages/SignUp/index";
// import Register from './pages/Register/index';

function App() {
  return (
    <Router>
      <div>
        <CssBaseline />
        <Switch>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/signup"}>
            <SignUp />
          </Route>
          {/* <Route path={"/login"}>
                <Redirect to="/register" />
              </Route>
              <Route  path={"/register"}>
                <Redirect to="/dashboard" />
              </Route> */}
          <Route exact path={"/"}>
            <Dashboard />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
          <Route exact path={"/saved"}>
            <Saved />
          </Route>
          <Route exact path={"/create"}>
            <Create />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /* <Route   component={Dashboard} />
<Route path='/profile' exact component={Profile} />
<Route path='/create' exact component={Create} /> 
<Route path='/saved' exact component={Saved} /> */
}

export default App;
