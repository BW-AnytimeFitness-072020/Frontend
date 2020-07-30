import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import FormSchema from './FormSchema.js';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

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
const PlaceHolders=styled.div`
display:flex;
`
const RegisterButton=styled.button`
background-color: #e80008;
color: black;
`
const initialRegistration = {
    username: '',
    email:'',
    password: '',
    user: {
        client: false,
        instructor: false,
    },
}

const initialErrors = {
    username: '',
    email: '',
    password: '',
}

const initialDisabled = true

export default function Register () { 
    const [registration, setRegistration] = useState(initialRegistration)
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
          setRegistration({...registration, [name]: value})
      }
    
      const checkChange = (name, isChecked) => {
        setRegistration({
          ...registration, users: {
            ...registration.users, [name]: isChecked,
          }
        })
      }
    
      const submit = () => {
        axios.post('https://reqres.in/api/users/signIn', registration)
        .then(response => {
          console.log(response)
          localStorage.setItem("token", response.data.payload)
          setRegistration(initialRegistration)
          history.push("/dashboard")
        })
        .catch(error => {
          console.log(error)
        })
      }
    
      useEffect(() => {
        FormSchema.isValid(registration).then(valid => {
          setDisabled(!valid)
        }, [registration])
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
        <Container>
            <h2>WELCOME!</h2>
            <h3>Please Register</h3>
            <div className='inputs'>
              <PlaceHolders>
                  <label>
                      <input
                      placeholder='UserName'
                      onChange={onInputChange}
                      name='name'
                      type='text'
                      />
                  </label>
                  <label>
                      <input
                          placeholder='Email Address'
                          onChange={onInputChange}
                          name='email'
                          type='email'
                      />
                  </label>
                  <label>
                      <input
                      placeholder='Password'
                      onChange={onInputChange}
                      name='password'
                      type='text'
                      />
                  </label>
                </PlaceHolders>
                <Checkbox>
                    <h4>Tell us if you are a client or Instructor</h4>
                    <Label>Client
                        <Input
                        type='checkbox'
                        name='client'
                        onChange={onCheckChange}
                        checked={registration.user.client === true }
                        />
                    </Label>
                    <Label>Instructor
                        <Input
                        type='checkbox'
                        name='instructor'
                        onChange={onCheckChange}
                        checked={registration.user.instructor === true }
                        />
                    </Label>
                </Checkbox> 
                <RegisterButton className='registerButton' disabled = {disabled}>Register</RegisterButton>
                <div>{errors.name}</div>
            </div>
        </Container>
    </form>
    )
}