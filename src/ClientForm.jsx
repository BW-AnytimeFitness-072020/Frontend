import React, { useState, useEffect } from 'react';
import ClassCard from './clientClassCard'
import Axios from 'axios';
import styled from 'styled-components';
import {axiosWithAuth} from './utils/axiosWithAuth'

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color:red;
`

const initialCourse = {
    // id: 0,
    // title: '',
    // scheduleTime: '',
    // address: '', 
    // city: '',
    // state: '',
    // zipcode: '',
    email: '',
    first_name:'',
    last_name:''
}
// const initialCourse = []
export default function Client (user) {

    const [course, setCourse] = useState([initialCourse])
    // const [coursevalues, setcoursevalues] = useState(initialCourseValues)
    
//     const onSubmit = e => {
//         e.preventDefault()
//         submit()
//     }
//     const submit = () => {
//         const classLists = {
//             // title: classes.title.trim(),
//             // scheduleTime: classes.scheduleTime.trim(), 
//             // address: classes.address.trim(),
//             // city: classes.city.trim(),
//             // state: classes.state.trim(),
//             // zipCode: classes.zipCode.trim(),
//             email: classes.email.trim(),
//             first_name: classes.first_name.trim(),
//             last_name: classes.last_name.trim(),
//         }
//         availableClasses(classLists)
//   }
  
  useEffect(() => {
    // axiosWithAuth().post('https://lambda-anywhere-fitness.herokuapp.com/api/classes')
        Axios.get('https://reqres.in/api/users')
      .then(res => {
      console.log('Elizabeth', res.data.data);
       setCourse(res.data.data)
      })
      .catch(err => {
      console.log(err);
    })
  }, [])

//   const availableClasses = classLists => {
//     axiosWithAuth().post('https://reqres.in/api/users', classLists)
//         // 'https://lambda-anywhere-fitness.herokuapp.com/api/classes', classLists)
//     .then(response => {
//         console.log(response.data.data)
//         // setClasses([...classes, response.data])
//         setClasses([response.data.data])
//     })
//     .catch(err => {	
//         console.log('error:', err)
//     })
// }

// const Showclasses = course => {
//     Axios.post('https://requres.in/api/users', course)
//     .then(response => {
//         setCourse(response.data.data, ...course)
//         setcoursevalues(initialCourseValues)

//     })
// }
  
  console.log('give me classes', course);
    return(
    <Container>
        <h3> WELCOME {user.name}!</h3>
        <h5>Find A Class Today!</h5>
        {/* <div className='search' onSubmit={onSubmit}>
            <label>
                <input
                    name='search'
                    placeholder='Search Classes'
                    type='search'
                />
            </label>
            <button className='searchbutton'>Search</button>
        </div> */}
        {course.map((each) => {
            return (
                <ClassCard 
                key={each.id}
                // course={course}
                user={each}
        />
            )

        })}
        
    </Container>
)}