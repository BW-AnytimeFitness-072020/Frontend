import React, { useContext, useState } from 'react';
import { UserContext } from './contexts/userContext';
import InstructorClassCard from './InstructorClassCard';
import AddClass from './components/AddClass';

const initialFormValues = {
  coursename: '',
  type: '',
  startdate: '',
  starttime: 0,
  duration: '',
  intensitylevel: '',
  location: '',
  sizecapacity: '',
}

export default function InstructorDash (){
  const { userData } = useContext(UserContext);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ updatingBool, setUpdatingBool ] = useState(false)
  return(
    <div>
      <h2>Welcome {userData.username}</h2>
      <div>
        <h3>Your Classes</h3>
          {userData.instructorcourses.map(createdClass => <InstructorClassCard key={createdClass.courseid} {...{createdClass, setFormValues, setUpdatingBool}}/>)}
      </div>
      <div>
        <h3>Create a New Class</h3>
        <AddClass {...{formValues, setFormValues, updatingBool, setUpdatingBool}}/>
      </div>
    </div>
  );
};