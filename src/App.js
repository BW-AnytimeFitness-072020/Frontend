import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import SignIn from './SignInPage.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <h1>ANYWHERE FITNESS</h1>
        <button>
          <Link to='/'>Home</Link>
        </button>
        <button>
          <Link to='/signin'>Sign In</Link>
        </button>
      </header>
      <Switch>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
