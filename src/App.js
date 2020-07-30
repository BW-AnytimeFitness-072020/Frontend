import React, {useState} from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Classes from './components/Classes'
import SignIn from './SignInPage.jsx';
import Register from './RegisterPage.jsx';
import Header from './header.jsx';
import { UserContext } from './contexts/userContext';
import './App.css'




const initialUserData = {

}


function App() {
  const [ userData, setUserData] = useState(initialUserData)
  {/*^This state will allow us to grab data stored in the client/instructor anywhere we want*/}

  return (
    <UserContext.Provider value={ userData }>
          {/* Put Client Page and Route inside */}
        
        
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
          <About />
        </Route>
        
        <Route path='/'>
        <Home />
        </Route>
      </Switch>
      </Col>
      </Row>
    </Container>
    </UserContext.Provider>
  )
}

export default App

