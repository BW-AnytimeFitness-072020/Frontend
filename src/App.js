import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Home from './components/Home'
import SignIn from './SignInPage.jsx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function App() {
  return (
    <Container fluid={true}>
    <Row noGutters={true}>
    <Col lg={true}>
      <Home />
      {/* <header>
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
      </Switch> */}
      </Col>
      </Row>
    </Container>
  );
}

export default App;
