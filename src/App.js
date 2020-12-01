import React from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Dashboard from "./pages/Homepage/index";
import Create from './pages/Create/index';
import Profile from './pages/Profile/index';
import Saved from './pages/Saved/index';


function App() {
  return (
    <div>
      <CssBaseline />
        {/* <Route path='/' exact component={Login} /> */}
        <Route path='/' exact component={Dashboard} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/create' exact component={Create} /> 
        <Route path='/saved' exact component={Saved} />
    </div>
  );
}

export default App;
