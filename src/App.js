import React, { useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './SignInPage.jsx';
import Register from './RegisterPage.jsx';
import Header from './header.jsx';







function App() {
  

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
