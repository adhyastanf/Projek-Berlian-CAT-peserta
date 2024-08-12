import { object, string } from 'yup';

let essaySchema = object({
  essayText: string(),
}).required();

export default essaySchema;
