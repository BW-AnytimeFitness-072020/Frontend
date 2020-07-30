import * as yup from 'yup';

const FormSchemaRegister = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().required(),
})
export default FormSchemaRegister
