import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Home from './components/Home'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import SignIn from './SignInPage.jsx';
import Register from './RegisterPage.jsx';
import FormSchema from './FormSchema.js';
import './App.css'



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
    <Container fluid={true}>
    <Row>
    <Col>
                    Anytime Fitness
                </Col>
                <Col>
                    <Link to='/'>Home</Link> </Col>
                 <Col>   <Link to='/signin'>Sign In</Link></Col>
                 <Col>   <Link to='/register'>Register</Link></Col>
                 <Col>   <Link to='/classes'>Classes</Link></Col>
                 <Col>   <Link to='/about'>About Us</Link>
                </Col>
      
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
        <Route exact path='/register'>
          <Register 
          inputchange={inputChange}
          disabled={disabled}
          errors={errors}
          signIn={signIn}
          checkChange={checkChange}
          submit={submit}/>
        </Route>
        <Route path='/classes'>
          {/* <Classes /> */}
        </Route>
        <Route path='/about'>
          {/* <About /> */}
        </Route>
        <Route path='/'>
        <Home />
        </Route>
      </Switch>
      </Row>
    </Container>
  );
}

export default App;
