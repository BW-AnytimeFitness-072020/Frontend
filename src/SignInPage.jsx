import React, {useState, useEffect} from 'react';
import FormSchema from './FormSchema.js';
import * as yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const history = useHistory()

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
        axios.post('https://reqres.in/api/users/signIn', signIn)
        .then(response => {
          console.log(response)
          localStorage.setItem("token", response.data.payload)
          setSignIn(initialSignIn)
          history.push("/dashboard")
        })
        .catch(error => {
          console.log(error)
        })
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
        <div className='container'>
            <h2>WELCOME!</h2>
            <h3>Please Sign In</h3>
            <div className='inputs'>
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
                    placeholder='Password'
                    onChange={onInputChange}
                    name='password'
                    type='text'
                    />
                </label>
                <div className='checkboxes'>
                    <h4>Tell us if you are a client or Instructor</h4>
                    <label>Client
                        <input
                        type='checkbox'
                        name='client'
                        onChange={onCheckChange}
                        checked={signIn.user.client === true }
                        />
                    </label>
                    <label>Instructor
                        <input
                        type='checkbox'
                        name='instructor'
                        onChange={onCheckChange}
                        checked={signIn.user.instructor === true }
                        />
                    </label>
                </div> 
                <button className='signInButton' disabled = {disabled}>Sign In</button>
                <div>{errors.name}</div>
            </div>
        </div>
    </form>
    )
}