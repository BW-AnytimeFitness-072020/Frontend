import React from 'react';

export default function SignIn () { 

    return (
        <form>
        <div className='container'>
            <heading>
                <h1>ANYWHERE FITNESS</h1>
                <button className='homebutton'>HOME</button>
            </heading>
            <div className='heading'>
                <h3>WELCOME!</h3>
                <h2>Please Sign In or Register</h2>
                <div className='inputs'>
                    <label>
                        <input
                        placeholder='UserName'
                        // onChange={onChange}
                        name='name'
                        type='text'
                        />
                    </label>
                    <label>
                        <input
                        placeholder='Password'
                        // onChange={onChange}
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
                            // onChange={onChange}
                            // checked={unknown === true }
                            />
                        </label>
                        <label>Intructor
                            <input
                            type='checkbox'
                            name='intructor'
                            // onChange={onChange}
                            // checked={unknown === true }
                            />
                        </label>
                    </div>
                    <button className='signInButton'>Sign In</button>
                    <button className='registerButton'>Register</button>
                </div>
            </div>
        </div>
    </form>
    )
}