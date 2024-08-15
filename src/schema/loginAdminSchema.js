import { object, string } from 'yup';

let loginAdminSchema = object({
  username: string().required('Username Harus Diisi'),
  password: string().required(' Harus Diisi')
});

export default loginAdminSchema;
