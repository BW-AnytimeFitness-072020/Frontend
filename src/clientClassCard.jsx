import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: grey;
padding: 2%;
display: flex;
flex-direction:column;
align-items: center;
width:100%;
`
const SmallContainer = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
justify-content: center;
align-items:center;
background-color:lightgrey;
padding: 2%;
width: 40%;
`
const RegisterButton = styled.button`
margin-left: 70%;
`

export default function ClassCard (course) {
    if (!course) {
        return <h3>We Are Finding Classes For You</h3>
    }
   return (
    <Container>
        <h4>Available Classes</h4>
        <SmallContainer>
            <RegisterButton>Register</RegisterButton>
            <p>Course: {course.coursename} </p>
            <p>Activity: {course.type}</p>
            <p>Start Time: {course.starttime }</p> 
            <p>Duration: {course.duration}</p>
            <p>Intensity: {course.intensitylevel}</p>
            <p>Location: {course.location}</p>
            <p>Class Capacity: {course.sizecapacty}</p>   
        </SmallContainer>
    </Container>
   ) 
}