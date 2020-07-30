import * as yup from 'yup';

const FormSchemaSignIn = yup.object().shape({
    username: yup.string().required('Username is required').min(3),
    password: yup.string().required('Password is required')
})
export default FormSchemaSignIn