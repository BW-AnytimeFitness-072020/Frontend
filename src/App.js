import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Classes from './components/Classes'
import SignIn from './SignInPage.jsx';
import Register from './RegisterPage.jsx';

import './App.css'

function App() {
  

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
      
    {/* <div className="App">
      <Header /></div> */}
      </Row>
      <Row>
      <Col>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/classes'>
          <Classes />
        </Route>
        <Route path='/about'>
          {/* <About /> */}
        </Route>
        <Route path='/'>
        <Home />
        </Route>
      </Switch>
      </Col>
      </Row>
    </Container>
  )
}

export default App
