import React from 'react';

export default function ClassCard (classl) {
    if (!classl) {
        return <h3>We Are Finding Classes For You</h3>
    }
   return (
    <div>
    <h4>Available Classes</h4>
        <div>
            <button>Register</button>
            <p>Course: {classl.coursename} </p>
            <p>Activity: {classl.type}</p>
            <p>Start Time: {classl.starttime }</p> 
            <p>Duration: {classl.duration}</p>
            <p>Intensity: {classl.intensitylevel}</p>
            <p>Location: {classl.location}</p>
            <p>CLass Capacity: {classl.sizecapacty}</p>   
        </div>
    </div>
   ) 
}