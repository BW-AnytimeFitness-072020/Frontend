import React from 'react'
import * as yup from 'yup'
import { states } from '../constants/index'

const stateAbbreviations = Array.from(Object.keys(states))

const formSchemaAddClass = yup.object().shape({
  coursename: yup
    .string()
    .required('Course name is required'),
  type: yup
    .string()
    .oneOf(['aerial', 'barre', 'bootcamp', 'boxing-kickboxing', 'circuit-training', 'crossfit', 'cycling', 'dance', 'gymnastics', 'interval-training', 'martial-arts', 'outdoor', 'personal-training', 'pilates', 'rock-climbing'], 'Class type is required')
    .required('Class type is required'),
  starttime: yup
    .number().typeError('Class start time is required')
    .oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 'Start time is required')
    .required('Start time is required'),
  duration: yup
    .string()
    .oneOf(['0.5', '1', '1.5'], 'Class duration is required')
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