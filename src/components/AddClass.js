import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import formSchemaAddClass from '../validation/formSchemaAddClass'
import Dropdown from './Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { states, classCategories, mililaryTime, initialFormValues } from '../constants/index'
import { UserContext } from '../contexts/userContext'


  const initialFormErrors = {
    coursename: '',
    type: '',
    date: '',
    starttime: '',
    duration: '',
    intensitylevel: '',
    location: '',
    sizecapacity: '',
  }
  
//   const initialClassInfo = []
  const initialDisabled = true

function AddClass(props) {
    // const [classInfo, setClassInfo] = useState(initialClassInfo)
    const { formValues, setFormValues, updatingBool, setUpdatingBool } = props
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    const { userData, setUserData } = useContext(UserContext)

    const postNewClass = newClass => {
        axios.post('https://reqres.in/api/users', newClass)
          .then(res => {
            setUserData({
                ...userData,
                createdclasses: [...userData.createdclasses, res.data]
            })
            setFormValues(initialFormValues)
          })
          .catch(err => {
            console.log(err)
          })
      }    
    const updateClass = updatedClass => {
        axios.put(`https://reqres.in/api/users/${updatedClass.id}`, updatedClass)
        .then(res => {
            setUserData({
                ...userData,
                createdclasses: userData.createdclasses.map(eachClass => {
                    return eachClass.id === updatedClass.id?
                    updatedClass:
                    eachClass;
                })
            })
            console.log(res.data)
            setFormValues(initialFormValues)
            setUpdatingBool(false)
        })
        .catch(err => {
        console.log(err)
        })

    }

      const inputChange = (name, value) => {
        yup
          .reach(formSchemaAddClass, name)
          .validate(value)
          .then(valid => {
            setFormErrors({
              ...formErrors,
              [name]: '',
            })
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            })
          })
          setFormValues({
            ...formValues,
            [name]: value
          })
      }

      const submit = () => {
        const newClass = {
            id: formValues.id,
            coursename: formValues.coursename.trim(),
            type: formValues.type.trim(),
            date: formValues.date.trim(),
            starttime: formValues.starttime.trim(),
            duration: formValues.duration.trim(),
            intensitylevel: formValues.intensitylevel.trim(),
            location: formValues.location.trim(),
            sizecapacity: formValues.sizecapacity.trim(),
        }
        updatingBool?
        updateClass(newClass):
        postNewClass(newClass);
      }

      useEffect(() => {
        formSchemaAddClass.isValid(formValues).then(valid => {
          setDisabled(!valid)
        })
      }, [formValues])
      useEffect(() => {
        console.log('userData.createdclasses useEffect', userData.createdclasses);
          
      }, [userData.createdclasses])
      const onInputChange = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return (
        <Row className='justify-content-center'>
            <form onSubmit={onSubmit}>
            <Row>
                <Col>
                    <div className='form-group'>
                    <label htmlFor='courseNameInput' className='sr-only'>Class Name</label>
                        <input 
                            id='courseNameInput'
                            name='coursename'
                            type='text'
                            placeholder='Class Name'
                            className='form-control'
                            onChange={onInputChange}
                            value={formValues.coursename}
                        />
                        <div className=' alert-warning'>
                    {formErrors.coursename}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className='form-group'>
                    <label htmlFor='courseTypeInput'>Class Type:&nbsp;
                        <Dropdown
                            data={classCategories} 
                            id='courseTypeInput'
                            name='type' 
                            value={formValues.type}
                            onChange={onInputChange}
                    />
                    </label>
                    <div className=' alert-warning'>
                    {formErrors.type}
                    </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='form-group'>
                    <label htmlFor='courseDateInput' className='sr-only'>Class Date</label>
                        <input 
                            id='courseDateInput'
                            name='date'
                            type='date'
                            placeholder='Class Date'
                            className='form-control'
                            onChange={onInputChange}
                            value={formValues.date}
                        />
                        <div className=' alert-warning'>
                    {formErrors.date}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className='form-group'>
                    <label htmlFor='courseStarttimeInput'>Class Start Time:&nbsp;
                        <Dropdown
                    data={mililaryTime} 
                    id='courseStarttimeInput'
                    name='starttime' 
                    value={formValues.starttime}
                    onChange={onInputChange}
                    />
                    </label>
                    <div className=' alert-warning'>
                    {formErrors.starttime}
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className='form-group'>
                    <label htmlFor='courseDurationInput' className='sr-only'>
                    Course Duration</label>
                        <input
                        id='courseDurationInput'
                        name='duration'
                        type='text'
                        placeholder='Class Duration (in mins)'
                        size='50'
                        value={formValues.duration}
                        onChange={onInputChange}
                        />
                        <div className=' alert-warning'>
                    {formErrors.duration}
                        </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className='form-group'>
                    <label htmlFor='intensityLevelInput'>Intensity Level:&nbsp;
                        <select
                        id='intensityLevelInput'
                        name='intensitylevel'
                        value={formValues.intensitylevel}
                        onChange={onInputChange}
                        >
                        <option value=''>Select</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                        </select>
                    </label>
                    <div className=' alert-warning'>
                    {formErrors.intensitylevel}
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className='form-group'>
                    <label htmlFor='locationInput'>Location:&nbsp;
                    <Dropdown
                    data={states} 
                    id='locationInput'
                    name='location' 
                    value={formValues.location}
                    onChange={onInputChange}
                    />
                    </label>
                    <div className=' alert-warning'>
                    {formErrors.location}
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className='form-group'>
                    <label htmlFor='courseSizeInput' className='sr-only'>
                    Class Capacity</label>
                        <input 
                            id='courseSizeInput'
                            name='sizecapacity'
                            type='text'
                            placeholder='Class Capacity'
                            size='50'
                            onChange={onInputChange}
                            value={formValues.sizecapacity}
                        />
                    <div className=' alert-warning'>
                    {formErrors.sizecapacity}
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className='form-group'>
                    <button disabled={disabled}>{updatingBool?
                    "Update Class":
                    "Add My Class"}
                    </button>
                </div>
                </Col>
            </Row>
            </form>
        </Row>
    )
}


export default AddClass