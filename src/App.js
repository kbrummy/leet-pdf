import React from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from "./pages/Homepage/index";
import Create from './pages/Create/index';
import Profile from './pages/Profile/index';


function App() {
  return (
    <div>
      <CssBaseline />
        {/* <Route path='/' exact component={Login} /> */}
        <Route path='/' exact component={Home} />
        <Route path='/create' exact component={Create} />
        <Route path='/profile' exact component={Profile} />
        
    </div>
  );
}

export default App;
