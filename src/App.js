import React, { useState } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Classes from './components/Classes'
import SignIn from './SignInPage.jsx';
import Register from './RegisterPage.jsx';
// import Header from './header.jsx';
import InstructorDash from './InstructorDash'
import { UserContext } from './contexts/userContext';
import './App.css'
 import Client from './ClientForm.jsx';



const initialUserData = {
  username: 'Jimmay',
  email: 'Jimmay@jimmay.com',
  password: 'Jimmay jr.',
  joinedclasses: [{
    id: 1,
    coursename: "Zoomba",
    type: "aerial",
    starttime: '12',
    duration: '50',
    intensitylevel: "medium",
    location: "FL",
    sizecapacity: '25'
  }],
  createdclasses: [{
    id: 1,
    coursename: "Zoomba",
    type: "aerial",
    starttime: '12',
    duration: '50',
    intensitylevel: "medium",
    location: "FL",
    sizecapacity: '25'

  }],
  client: false,
  instructor: true,
}


function App() {
  const [userData, setUserData] = useState(initialUserData)
  console.log('userData', userData);
  {/*^This state will allow us to grab data stored in the client/instructor anywhere we want*/ }

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Container fluid={true}>
<<<<<<< HEAD
        <Row>
          <Col>
            Anytime Fitness
          </Col>
          <Col>
            <Link to='/'>Home</Link> </Col>
          <Col><Link to='/signin'>Sign In</Link></Col>
          <Col><Link to='/register'>Register</Link></Col>
          <Col><Link to='/instructor'>Dashboard</Link></Col>
          <Col><Link to='/about'>About Us</Link>
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
              <Route path='/about'>
                {/* <About /> */}
              </Route>
              <Route path='/instructor'>
                <InstructorDash />
              </Route>

              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Col>
=======
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
          <Route exact path='/client'>
              <Client />
            </Route>
          <Route path='/classes'>
            <Classes />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/instructor'>
            <InstructorDash />
          </Route>
          
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        </Col>
>>>>>>> master
        </Row>
      </Container>
    </UserContext.Provider>
  )
}

export default App

