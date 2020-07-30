import * as yup from 'yup';

const FormSchemaSignIn = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required()
})
export default FormSchemaSignIn