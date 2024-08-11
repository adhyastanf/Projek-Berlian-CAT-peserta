import { object, string } from 'yup';

let essaySchema = object({
  essayText: yup.string(),
}).required();

export default essaySchema;
