import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import SignIn from './SignInPage.jsx'

function App() {
  return (
    <div className="App">
     <SignIn />
    </div>
  );
}

export default App;
