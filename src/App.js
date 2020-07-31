import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SignIn from './SignInPage.jsx';
import Register from './RegisterPage.jsx';
// import Header from './header.jsx';
import InstructorDash from './InstructorDash'
import { UserContext } from './contexts/userContext';
import './App.css'
import Client from './ClientForm.jsx';
import PrivateRoute from './PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';

const initialUserData = {
  username: '',
  email: '',
  password: '',
  role: '',
  userid: '',
  courses: [],
  instructorcourses: [],
}

function App() {
  const [userData, setUserData] = useState(initialUserData)
  console.log('userData', userData);

  /*^This state will allow us to grab data stored in the client/instructor anywhere we want*/
  const userType = () => {
    if(userData.role === "USER"){
      return '/client'
    }else if (userData.role === "ADMIN"){
      return '/instructor'
    } else {
      return '/signin'
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axiosWithAuth()
      .get('/courses/getuserinfo')
      .then(response => {
          setUserData({
              userid: response.data.userid,
              username: response.data.username,
              email: response.data.email,
              courses: response.data.courses,
              instructorcourses: response.data.instructorcourses,
              role: response.data.roles[0].role.name
          })
      })
      .catch(error => console.log("error getting user data after sign in:", error))
    }
  
  },[])

  const dontDisplayWhenLogin = () => {
    if(userData.role) {
      return {display: 'none'}    
    }else {
      return {display: 'inline'}
    }
  }
  const displayWhenLogin = () => {

    if(userData.role) {
      return {display: 'inline'}    
    }else {
      return {display: 'none'}
    }
  }
  
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      
      <Row>
      <Col>
                      Anytime Fitness
                  </Col>
                  <Col>
                      <Link to='/'>Home</Link> </Col>
                  <Col>   <Link style={dontDisplayWhenLogin()} to='/signin'>Sign In</Link></Col>
                  <Col>   <Link style={dontDisplayWhenLogin()} to='/register'>Register</Link></Col>
                  <Col>   <Link style={displayWhenLogin()} to={userType()}>Dashboard</Link></Col>
                  <Col>   <Link to='/about'>About Us</Link></Col>
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
          <PrivateRoute exact path='/client'>
            <Client />
          </PrivateRoute>
          <Route path='/about'>
            <About />
          </Route>
          <PrivateRoute path='/instructor'>
            <InstructorDash />
          </PrivateRoute>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        </Col>
        </Row>
     
    </UserContext.Provider>
  )
}

export default App

