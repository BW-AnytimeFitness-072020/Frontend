import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { UserContext } from './contexts/userContext';
import { InstructorClassCard } from './InstructorClassCard'

export default function InstructorDash (){
  const userData = useContext(UserContext)

  return(
    <div>
      <h2>Welcome {userData.username}</h2>
      <div>
        <h3>Your Classes</h3>
          {/* {userData.createdclasses.map(() => <InstructorClassCard/>)} */}
      </div>
      <div>
        <h3>Create a New Class</h3>

      </div>
    </div>
  )
}