import React, { useContext } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { UserContext } from "./contexts/userContext";

export default function InstructorClassCard(props) {
  const {  id, coursename, type, starttime, duration, intensitylevel, location, sizecapacity } = props.createdClass;
  const { createdClass, setFormValues,setUpdatingBool } = props;
  const { setUserData, userData } = useContext(UserContext);

  const deleteClass = classId => {
    axiosWithAuth()
    .delete(`/courses/courses/${classId}`)
    .then(response => {
      setUserData({
        ...userData,
        instructorcourses: userData.instructorcourses.filter(eachClass => {
          return eachClass.id !== classId
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
    <p>Start Time: {starttime }</p> 
    <p>Duration: {duration}</p>
    <p style={{textTransform: 'capitalize'}}>Intensity: {intensitylevel}</p>
    <p>Location: {location}</p>
    <p>Class Capacity: {sizecapacity}</p>
    <button onClick={() => {
      setFormValues(...createdClass)
      setUpdatingBool(true)
    }}>Update</button>
    <button onClick={() => deleteClass(id)}>Delete</button>
  </div>
  );
}