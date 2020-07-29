import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import formSchemaAddClass from '../validation/formSchemaAddClass'
import Dropdown from './Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { states, classCategories, mililaryTime, initialFormValues } from '../constants/index'
import { UserContext } from '../contexts/userContext'


  const initialFormErrors = {
    coursename: '',
    type: '',
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
                createdclasses: [userData.createdclasses, res.data]
            })
            console.log(res.data)
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
            coursename: formValues.coursename.trim(),
            type: formValues.type.trim(),
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

      const onInputChange = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return (
        <Container>
            <form onSubmit={onSubmit}>
            <Row>
                <Col>
                    <h3>Class Info</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor='courseNameInput'>
                        <input 
                            id='courseNameInput'
                            name='coursename'
                            type='text'
                            placeholder='Course name'
                            size='50'
                            onChange={onInputChange}
                            value={formValues.coursename}
                        />
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    {formErrors.coursename}
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor='courseTypeInput'>Class Type:&nbsp;
                        <Dropdown
                            data={classCategories} 
                            id='courseTypeInput'
                            name='type' 
                            value={formValues.type}
                            onChange={onInputChange}
                    />
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    {formErrors.type}
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor='courseStarttimeInput'>Class Start Time:&nbsp;
                        <Dropdown
                    data={mililaryTime} 
                    id='courseStarttimeInput'
                    name='starttime' 
                    value={formValues.starttime}
                    onChange={onInputChange}
                    />
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    {formErrors.starttime}
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor='courseDurationInput'>
                        <input
                        id='courseDurationInput'
                        name='duration'
                        type='text'
                        placeholder='Class Duration (in mins)'
                        size='50'
                        value={formValues.duration}
                        onChange={onInputChange}
                        />
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    {formErrors.duration}
                </Col>
            </Row>
            <Row>
                <Col>
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
                </Col>
            </Row>
            <Row>
                <Col>
                    {formErrors.intensitylevel}
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor='locationInput'>Location:&nbsp;
                    <Dropdown
                    data={states} 
                    id='locationInput'
                    name='location' 
                    value={formValues.location}
                    onChange={onInputChange}
                    />
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    {formErrors.location}
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor='courseSizeInput'>
                        <input 
                            id='courseSizeInput'
                            name='sizecapacity'
                            type='text'
                            placeholder='Class capacity'
                            size='50'
                            onChange={onInputChange}
                            value={formValues.sizecapacity}
                        />
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    {formErrors.sizecapacity}
                </Col>
            </Row>
            <Row>
                <Col>
                    <button disabled={disabled}>{updatingBool?
                    "Update Class":
                    "Add My Class"}
                    </button>
                </Col>
            </Row>
            </form>
        </Container>
    )
}


export default AddClass