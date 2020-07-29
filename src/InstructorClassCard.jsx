import React, { useContext } from "react"
import { axiosWithAuth } from "./utils/axiosWithAuth"
import { UserContext } from "./contexts/userContext"

export default function InstructorClassCard(props) {
  const {  id, coursename, type, starttime, duration, intensitylevel, location, sizecapacity } = props.createdClass;
  const { setUserData, userData } = useContext(UserContext)

  const deleteClass = classId => {
    axiosWithAuth()
    .delete(`/courses/courses/${classId}`)
    .then(response => {
      console.log(response)
      setUserData({
        ...userData,
        createdclasses: userData.createdclasses.filter(eachClass => {
          return eachClass.id === classId
        })
      })
    })
    .catch(error => console.log("Axios deleteClass in InstructorClassCard error:", error))
  }
    return(
  <div>
    <h4>Available Classes</h4>
    <p>Course: {coursename} </p>
    <p>Activity: {type}</p>
    <p>Start Time: {starttime }</p> 
    <p>Duration: {duration}</p>
    <p>Intensity: {intensitylevel}</p>
    <p>Location: {location}</p>
    <p>Class Capacity: {sizecapacity}</p>
    <button>Update</button>
    <button onClick={()=>deleteClass(id)}>Delete</button>
  </div>
  )
}