import React from 'react';
import ClassCard from './clientClassCard'
export default function Client (props) {
    const { user } = props
    return(
    <div>
        <h3> WELCOME {user.name}!</h3>
        <h5>Please select a class</h5>
        <div className='search'>
            <label>
                <input
                    name='search'
                    placeholder='Search Classes'
                    type='search'
                />
            </label>
            <button className='searchbutton'>Search</button>
        </div>
    </div>
)}