import React, { useState } from 'react';
import ClassCard from './clientClassCard'
import Axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color:red;
`

const initialClass = {
    id: 0,
    course: '',
    type: '',
    starttime: '', 
    duration: '',
    intensitylevel: '',
    location: '',
    sizecapacity: '',
}

export default function Client (user) {

    const [classes, setClasses] = useState([initialClass])

    
    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
    const submit = () => {
        const classLists = {
            course: classes.course.trim(),
            type: classes.type.trim(),
            starttime: classes.starttime.trim(), 
            duration: classes.duration.trim(),
            intensitylevel: classes.intensitylevel.trim(),
            location: classes.location.trim(),
            sizecapacity: classes.sizecapacity.trim(),
        }
        availableClasses(classLists)
    }
        const availableClasses = classLists => {
                Axios.get('https://lambda-anywhere-fitness.herokuapp.com/api/classes', classLists)
                .then(response => {
                    console.log(response)
                    setClasses([...classes, response.data])
                })
                .catch(err => {
                    console.log('error:', err)
                })
            }
    return(
    <Container>
        <h3> WELCOME {user.name}!</h3>
        <h5>Find A Class Today!</h5>
        <div className='search' onSubmit={onSubmit}>
            <label>
                <input
                    name='search'
                    placeholder='Search Classes'
                    type='search'
                />
            </label>
            <button className='searchbutton'>Search</button>
        </div>
        {classes.map(course => {
            return (
                <ClassCard 
                key={course.id}
                classes={course}
        />
            )
        })

        }
        
    </Container>
)}