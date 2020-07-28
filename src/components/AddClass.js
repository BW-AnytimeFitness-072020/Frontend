import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import formSchemaAddClass from '../validation/formSchemaAddClass'
import StatesDropdown from './StatesDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const initialFormValues = {
    coursename: '',
    type: '',
    starttime: '',
    duration: '',
    intensitylevel: '',
    location: '',
    sizecapacity: '',
  }
  
  const initialFormErrors = {
    coursename: '',
    type: '',
    starttime: '',
    duration: '',
    intensitylevel: '',
    location: '',
    sizecapacity: '',
  }
  
  const initialClassInfo = []
  const initialDisabled = true

function AddClass() {
    const [classInfo, setClassInfo] = useState(initialClassInfo)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const postNewClass = newClass => {
        axios.post('https://reqres.in/api/users', newClass)
          .then(res => {
            setClassInfo([res.data, ...classInfo])
            console.log(res.data)
            setFormValues(initialFormValues)
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
            intensitylevel: formValues.duration.trim(),
            location: formValues.location.trim(),
            sizecapacity: formValues.sizecapacity.trim(),
        }
        postNewClass(newClass)
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
                    <label htmlFor='courseTypeInput'>Difficulty Level:&nbsp;
                        <select
                        id='courseTypeInput'
                        name='type'
                        value={formValues.type}
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
                    {formErrors.type}
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor='courseStarttimeInput'>Class Start Time:&nbsp;
                        <select
                        id='courseStarttimeInput'
                        name='starttime'
                        value={formValues.starttime}
                        onChange={onInputChange}
                        >
                        <option value=''>Select</option>
                        <option value='1'>01:00</option>
                        <option value='2'>02:00</option>
                        <option value='3'>03:00</option>
                        <option value='4'>04:00</option>
                        <option value='5'>05:00</option>
                        <option value='6'>06:00</option>
                        <option value='7'>07:00</option>
                        <option value='8'>08:00</option>
                        <option value='9'>09:00</option>
                        <option value='10'>10:00</option>
                        <option value='11'>11:00</option>
                        <option value='12'>12:00</option>
                        <option value='13'>13:00</option>
                        <option value='14'>14:00</option>
                        <option value='15'>15:00</option>
                        <option value='16'>16:00</option>
                        <option value='17'>17:00</option>
                        <option value='18'>18:00</option>
                        <option value='19'>19:00</option>
                        <option value='20'>20:00</option>
                        <option value='21'>21:00</option>
                        <option value='22'>22:00</option>
                        <option value='23'>23:00</option>
                        </select>
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
                    <label htmlFor='courseDurationInput'>Class Duration:&nbsp;
                        <select
                        id='courseDurationInput'
                        name='duration'
                        value={formValues.duration}
                        onChange={onInputChange}
                        >
                        <option value=''>Select</option>
                        <option value='0.5'>30 mins</option>
                        <option value='1'>60 mins</option>
                        <option value='1.5'>90 mins</option>
                        </select>
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
                    <label htmlFor='locationInput'>Location:&nbsp;
                    <StatesDropdown 
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
                    <button disabled={disabled}>Add My Class</button>
                </Col>
            </Row>
            </form>
        </Container>
    )
}


export default AddClass