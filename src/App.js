import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
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
import PrivateRoute from './PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';



// const initialUserData = {
//   username: 'Jimmay',
//   email: 'Jimmay@jimmay.com',
//   password: 'Jimmay jr.',
//   courses: [{
//     id: 1,
//     coursename: "Zoomba",
//     type: "aerial",
//     starttime: '12',
//     duration: '50',
//     intensitylevel: "medium",
//     location: "FL",
//     sizecapacity: '25'
//   }],
//   instructorcourses: [{
//     id: 1,
//     coursename: "Zoomba",
//     type: "aerial",
//     starttime: '12',
//     duration: '50',
//     intensitylevel: "medium",
//     location: "FL",
//     sizecapacity: '25'

//   }],
//   roles: [{
//     role: {
//       roleid: 2,
//       name: "USER"
//     }
//   }]
// }
const initialUserData = {
  username: '',
  email: '',
  password: '',
  role: '',
  userid: '',
  courses: [{
    id: 1,
    coursename: "",
    type: "",
    starttime: '',
    duration: '',
    intensitylevel: "",
    location: "",
    sizecapacity: ''
  }],
  instructorcourses: [{
    id: 1,
    coursename: "",
    type: "",
    starttime: '',
    duration: '',
    intensitylevel: "",
    location: "",
    sizecapacity: ''

  }],
}

function App() {
  const [userData, setUserData] = useState(initialUserData)
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
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      
      <Row>
      <Col>
                      Anytime Fitness
                  </Col>
                  <Col>
                      <Link to='/'>Home</Link> </Col>
                  <Col>   <Link to='/signin'>Sign In</Link></Col>
                  <Col>   <Link to='/register'>Register</Link></Col>
                  <Col>   <Link to={userType()}>Dashboard</Link></Col>
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

