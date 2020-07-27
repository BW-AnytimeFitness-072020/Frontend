import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import SignIn from './SignInPage.jsx'
import FormSchema from './FormSchema.js';

const initialSignIn = {
  username: '',
  password: '',
  user: {
    client: false,
    instructor: false,
  },
}

const initialErrors = {
  username: '',
  password: '',
}

const initialDisabled = true

function App() {

  const [signIn, setSignIn] = useState(initialSignIn)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [errors, setErrors] = useState(initialErrors)

  const inputChange = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...errors, [name]: '',
        })
      })
      .catch(error => {
        setErrors({
          ...errors, [name]: error.errors[0],
        })
      })
      setSignIn({...signIn, [name]: value})
  }

  const checkChange = (name, isChecked) => {
    setSignIn({
      ...signIn, users: {
        ...signIn.users, [name]: isChecked,
      }
    })
  }

  const submit = () => {
    
  }

  useEffect(() => {
    FormSchema.isValid(signIn).then(valid => {
      setDisabled(!valid)
    }, [signIn])
  })

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
          <SignIn 
          inputchange={inputChange}
          disabled={disabled}
          errors={errors}
          signIn={signIn}
          checkChange={checkChange}
          submit={submit}/>
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
