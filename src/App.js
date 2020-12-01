import React from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from "./pages/Homepage/index";
import Create from './pages/Create/index';


function App() {
  return (
    <div>
      <CssBaseline />
        {/* <Route path='/' exact component={Login} /> */}
        <Route path='/' exact component={Home} />
        <Route path='/create' exact component={Create} />
        
    </div>
  );
}

export default App;
