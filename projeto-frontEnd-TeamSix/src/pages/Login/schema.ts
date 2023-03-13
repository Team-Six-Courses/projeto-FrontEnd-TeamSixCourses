import * as yup from 'yup';

export const SchemaLogin = yup.object({
  email: yup
  .string()
  .required('O email é obrigatório!')
  .email('É necessário fornecer um email.'),

password: yup.string().required('A senha é obrigatória!'),
});
