import React from 'react';

export default function ClassCard ({classes}) {
    if (!classes) {
        return <h3>We Are Finding Classes For You</h3>
    }
   return (
    <div>
    <h4>Available Classes</h4>
    <p>Course: {classes.coursename} </p>
    <p>Activity: {classes.type}</p>
    <p>Start Time: {classes.starttime }</p> 
    <p>Duration: {classes.duration}</p>
    <p>Intensity: {classes.intensitylevel}</p>
    <p>Location: {classes.location}</p>
     <p>CLass Capacity: {classes.sizecapacty}</p>   
    </div>
   ) 
}