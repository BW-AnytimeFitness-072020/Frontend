import React, {useState, useEffect, useContext} from 'react';
import FormSchema from './FormSchema.js';
import * as yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from './contexts/userContext';
import styled from 'styled-components';
import apiHook from './utils/apiHook'
import { axiosWithAuth } from './utils/axiosWithAuth'

const Container=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10% 25%;
background-color: #CFD2E8;
padding: 5%;
border: solid 5px #665770;
border-radius: 15%;
`
const Checkbox=styled.div`
display:flex;
justify-content: space-evenly;
`
const Label=styled.div`
display:flex;
align-items: center;
justify-content:space-between;
`
const Input=styled.input`
margin: 10px;
`
const SignInButton=styled.button`
background-color: #e80008;
color: black;
`

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

export default function SignIn () { 
    const { setUserData } = useContext(UserContext)
    const [signIn, setSignIn] = useState(initialSignIn)
    const [disabled, setDisabled] = useState(initialDisabled)
    const [errors, setErrors] = useState(initialErrors)
    
    const history = useHistory()

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
        const userCredentials = {
            username: signIn.username,
            password: signIn.password
        }
        axios.post(`${apiHook()}login`, `grant_type=password&username=${userCredentials.username}&password=${userCredentials.password}`, {
            headers: {
                Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
          localStorage.setItem("token", response.data.access_token)
          getUserData()
        })
        .catch(error => {
          console.log(error)
        })
      }
    const getUserData = () => {
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
            history.push(response.data.roles[0].role.name === "USER"?
            "/client":
            "/instructor"
            )
        })
        .catch(error => console.log("error getting user data after sign in:", error))
    }
      useEffect(() => {
        FormSchema.isValid(signIn).then(valid => {
          setDisabled(!valid)
        }, [signIn])
      })

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    const onInputChange = e => {
        const {name, value} = e.target
        inputChange(name, value)
    }

    const onCheckChange = e => {
        const {name, checked} = e.target
        checkChange(name, checked)
    }

    return (
        <form onSubmit={onSubmit}>
        <Container >
            <h2>WELCOME!</h2>
            <h3>Please Sign In</h3>
            <div className='inputs'>
                <label>
                    <input
                    placeholder='UserName'
                    onChange={onInputChange}
                    name='username'
                    type='text'
                    />
                </label>
                <label>
                    <input
                    placeholder='Password'
                    onChange={onInputChange}
                    name='password'
                    type='password'
                    />
                </label>
                <div className='checkboxes'>
                    <h4>Tell us if you are a client or Instructor</h4>
                    <Checkbox>
                        <Label>Client
                          <Input
                          type='checkbox'
                          name='client'
                          onChange={onCheckChange}
                          checked={signIn.user.client.value }
                          />
                        </Label>
                      <Label>Instructor
                          <Input
                          type='checkbox'
                          name='instructor'
                          onChange={onCheckChange}
                          checked={signIn.user.instructor.value }
                          />
                        </Label>
                    </Checkbox>
                </div> 
                <SignInButton className='signInButton' disabled = {disabled}>Sign In</SignInButton>
                <div>{errors.name}</div>
            </div>
        </Container>
    </form>
    )
}