import React, { useContext } from 'react';
import { UserContext } from './contexts/userContext';
import InstructorClassCard from './InstructorClassCard'
import AddClass from './components/AddClass'

export default function InstructorDash (){
  const userData = useContext(UserContext)

  return(
    <div>
      <h2>Welcome {userData.username}</h2>
      <div>
        <h3>Your Classes</h3>
          {userData.createdclasses.map(createdClass => <InstructorClassCard key={createdClass.id} createdClass={createdClass}/>)}
      </div>
      <div>
        <h3>Create a New Class</h3>
        <AddClass />
      </div>
    </div>
  )
}