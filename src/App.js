import React from 'react';
import Home from './components/pages/Login';
import Profile from './components/pages/Profile';
import Signup from './components/pages/Signup';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/pages/Login';

function App() {
  return (
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/signup" exact component={Signup}/>
    </div>
  );
}

export default App;
