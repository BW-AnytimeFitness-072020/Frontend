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

export default function ClassCard (props) {
  const {first_name, last_name, email} = props.user
    // if (!course) {
    //     return <h3>We Are Finding Classes For You</h3>
    // }
  console.log('card --> ', props);
   return (
    <Container>
        <h4>Available Classes</h4>
        <SmallContainer>
            {/* <RegisterButton>Register</RegisterButton> */}
            {/* <p>Course: {course.title} </p>
            <p>Start Time: {course.scheduleTime}</p>
            <p>Address: {course.address}</p> 
            <p>City: {course.city}</p>
            <p>State: {course.state}</p>
            <p>Zip Code: {course.zipCode}</p> */}
            <p>First Name: {first_name}</p>
            <p>Last Name: {last_name}</p>
        <p>Email: {email}</p>
        </SmallContainer>
    </Container>
   ) 
}
