import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Dashboard from "./pages/Dashboard/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Landing from "./pages/Landing/index";
import PrivateRoute from "./components/PrivateRoute/index";
import Create from "./pages/CreateNewPDF/index";
import ProfilePage from "./pages/ProfilePage/index";
import Saved from "./pages/Saved/index";

// Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());

//     // Redirect to login
//     window.location.href = "./login";
//   }
// }

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <Router>
        <div className="App">
          <CssBaseline />
          {/* <Navbar /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/create" component={Create} />
          <Switch>
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
      // </Provider>
    );
  }
}
export default App;

// function App() {
//   return (
//     <Router>
//       <div>
//         <CssBaseline />
//         <Switch>
//           <Route exact path={"/login"}>
//             <Login />
//           </Route>
//           <Route exact path={"/signup"}>
//             <SignUp />
//           </Route>
//           {/* <Route path={"/login"}>
//                 <Redirect to="/register" />
//               </Route>
//               <Route  path={"/register"}>
//                 <Redirect to="/dashboard" />
//               </Route> */}
//           <Route exact path={"/"}>
//             <Dashboard />
//           </Route>
//           <Route exact path={"/profile"}>
//             <Profile />
//           </Route>
//           <Route exact path={"/saved"}>
//             <Saved />
//           </Route>
//           <Route exact path={"/create"}>
//             <Create />
//           </Route>
//           <Route path="*">
//             <NoMatch />
//           </Route>
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// eslint-disable-next-line no-lone-blocks
{
  /* <Route   component={Dashboard} />
<Route path='/profile' exact component={Profile} />
<Route path='/create' exact component={Create} /> 
<Route path='/saved' exact component={Saved} /> */
}
