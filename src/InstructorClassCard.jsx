import React, { useContext } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { UserContext } from "./contexts/userContext";

export default function InstructorClassCard(props) {
  const {  courseid, coursename, startdate, type, starttime, duration, intensitylevel, location, sizecapacity } = props.createdClass;
  const { createdClass, setFormValues, setUpdatingBool } = props;
  const { setUserData, userData } = useContext(UserContext);

  const deleteClass = classId => {
    console.log('classId', classId);
    axiosWithAuth()
    .delete(`/courses/course/${classId}`)
    .then(response => {
      setUserData({
        ...userData,
        instructorcourses: userData.instructorcourses.filter(eachClass => {
          return eachClass.courseid !== classId
        })
      })
    })
    .catch(error => console.log("Axios deleteClass in InstructorClassCard error:", error));
  };
    return(
  <div>
    <h4>Available Classes</h4>
    <p>Course: {coursename} </p>
    <p style={{textTransform: 'capitalize'}}>Activity: {type}</p>
    <p>Date: {startdate}</p>
    <p>Start Time: {starttime }</p> 
    <p>Duration: {duration}</p>
    <p style={{textTransform: 'capitalize'}}>Intensity: {intensitylevel}</p>
    <p>Location: {location}</p>
    <p>Class Capacity: {sizecapacity}</p>
    <button onClick={() => {
      console.log('createdClass', createdClass);
      
      setFormValues(createdClass)
      setUpdatingBool(true)
    }}>Update</button>
    <button onClick={() => deleteClass(courseid)}>Delete</button>
  </div>
  );
}