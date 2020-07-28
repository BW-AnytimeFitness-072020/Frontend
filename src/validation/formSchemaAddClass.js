import React from 'react'
import * as yup from 'yup'

const formSchemaAddClass = yup.object().shape({
  coursename: yup
    .string()
    .required('Course name is required'),
  type: yup
    .string()
    .oneOf(['easy', 'medium', 'hard'], 'Class type is required')
    .required('Class type is required'),
  starttime: yup
    .string()
    .oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'], 'Start time is required')
    .required('Start time is required'),
  duration: yup
    .string()
    .oneOf(['0.5', '1', '1.5'], 'Class duration is required')
    .required('Class duration is required'),
  location: yup
    .string()
    .oneOf([ 'AK',
    'AL',
    'AR',
    'AS',
    'AZ',
    'CA',
    'CO',
    'CT',
    'DC',
    'DE',
    'FL',
    'GA',
    'GU',
    'HI',
    'IA',
    'ID',
    'IL',
    'IN',
    'KS',
    'KY',
    'LA',
    'MA',
    'MD',
    'ME',
    'MI',
    'MN',
    'MO',
    'MS',
    'MT',
    'NC',
    'ND',
    'NE',
    'NH',
    'NJ',
    'NM',
    'NV',
    'NY',
    'OH',
    'OK',
    'OR',
    'PA',
    'PR',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VA',
    'VI',
    'VT',
    'WA',
    'WI',
    'WV',
    'WY'], 'Location is required')
    .required('Location is required'),
  sizecapacity: yup
    .number('Class capacity is required')
    .integer('Decimals are not allowed')
    .positive('Negative numbers are not allowed')
    .required('Class capacity is required'),
})

export default formSchemaAddClass