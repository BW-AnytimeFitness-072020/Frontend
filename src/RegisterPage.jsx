import React from 'react';

export default function Register (props) { 
    const {inputChange, disabled, errors, signIn, checkChange, submit} = props

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
            <h3>Please Register</h3>
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
                <button className='registerButton' disabled = {disabled}>Sign In</button>
                <div>{errors.name}</div>
            </div>
        </div>
    </form>
    )
}