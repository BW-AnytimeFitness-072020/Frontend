import React, { useState, useEffect, useContext } from 'react';
import ClassCard from './clientClassCard'
import {axiosWithAuth} from './utils/axiosWithAuth';
import styled from 'styled-components';
import { UserContext } from './contexts/userContext'

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
    const { userData } = useContext(UserContext)
    const [classes, setClasses] = useState([initialClass])

    useEffect(() => {
        axiosWithAuth()
        .get('courses/courses')
        .then(response => {
            console.log('response', response);
            setClasses(response.data)
        })
        .catch(err => {
            console.log('error:', err)
        })

    },[])

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
                axiosWithAuth()
                .get('courses/courses', classLists)
                .then(response => {
                    setClasses([...classes, response.data])
                })
                .catch(err => {
                    console.log('error:', err)
                })
            }
    return(
        <Container>
            <h3> WELCOME {userData.username}!</h3>
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
                    course={course}
                    />
                )
            })}
            
        </Container>
    )}