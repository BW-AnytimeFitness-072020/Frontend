import React from 'react'
import * as yup from 'yup'
import { states, classCategories, mililaryTime } from '../constants/index'

const stateAbbreviations = Array.from(Object.keys(states))
const classList = Array.from(Object.keys(classCategories))
const timeArray = Array.from(Object.keys(mililaryTime))
console.log(timeArray)

const formSchemaAddClass = yup.object().shape({
  coursename: yup
    .string()
    .required('Course name is required'),
  type: yup
    .string()
    .oneOf(classList, 'Class type is required')
    .required('Class type is required'),
  starttime: yup
    .string()
    .oneOf(timeArray, 'Start time is required')
    .required('Start time is required'),
  duration: yup
    .number().min(30).typeError('Duration must be a number')
    .integer('Decimals are not allowed')
    .positive('Negative numbers are not allowed')
    .required('Class duration is required'),
    intensitylevel: yup
    .string()
    .oneOf(['easy', 'medium', 'hard'], 'Intensity level is required')
    .required('Intensity level is required'),
  location: yup
    .string()
    .oneOf(stateAbbreviations, 'Location is required')
    .required('Location is required'),
  sizecapacity: yup
    .number().typeError('Class capacity must be a number')
    .integer('Decimals are not allowed')
    .positive('Negative numbers are not allowed')
    .required('Class capacity is required'),
})

export default formSchemaAddClass