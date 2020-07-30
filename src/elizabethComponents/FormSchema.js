import * as yup from 'yup';

const FormSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(3, 'must be 3 characters or more'),
    password: yup.string().required('password is required'),
    email: yup.string().required('Email is required'),
    
})
export default FormSchema