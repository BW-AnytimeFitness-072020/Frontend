import * as yup from 'yup';

const FormSchema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().required,
    // user: yup.object().shape({
    //     client: yup.boolean(),
    //     instructor: yup.boolean()
    // }).required(),
})
export default FormSchema