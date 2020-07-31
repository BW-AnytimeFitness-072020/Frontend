import * as yup from 'yup'
import { states, classCategories, mililaryTime } from '../constants/index'

/* The three variables below generate the list of state abbreviations for oneOf criteria in type, starttime and location in schema below from the objects supplied under constants imported above */
const stateAbbreviations = Array.from(Object.keys(states)) 
const classList = Array.from(Object.keys(classCategories))
const timeArray = Array.from(Object.keys(mililaryTime))

/* Sets minDate to yesterday to disallow entering dates in the past into input form */
const minDate = new Date()
minDate.setDate(minDate.getDate() - 1)


const formSchemaAddClass = yup.object().shape({
  coursename: yup
    .string()
    .max(250)
    .matches(/^[a-zA-Z0-9!$&#'?()\-": ]+$/, 'You have entered invalid characters')
    .required('Course name is required'),
  type: yup
    .string()
    .oneOf(classList, 'Class type is required')
    .required('Class type is required'),
  startdate: yup
    .date().typeError('Please enter a date in the format mm/dd/yyyy')
    .min(minDate, 'You can not enter a date in the past')
    .required('Class date is required'),
  starttime: yup
    .string()
    .oneOf(timeArray, 'Start time is required')
    .required('Start time is required'),
  duration: yup
    .number().moreThan(29).typeError('Duration must be a number')
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