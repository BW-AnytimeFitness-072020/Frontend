import React from 'react';

export default function ClassCard () {
   return (
    <div>
    <h4>Available Classes</h4>
    <p>Course: {coursename} </p>
    <p>Activity: {type}</p>
    <p>Start Time: {starttime }</p> 
    <p>Duration: {duration}</p>
    <p>Intensity: {intensitylevel}</p>
    <p>Location: {location}</p>
     <p>CLass Capacity: {sizecapacty}</p>   
    </div>
     
     
   ) 
}