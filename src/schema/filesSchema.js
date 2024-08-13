import {object, mixed} from 'yup';

// Define allowed file types
const allowedFileTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];

const fileSchema = object().shape({
  file: mixed()
    .required('File is required')
    .test('fileType', 'Unsupported File Format', (value) => !value.length || (value && allowedFileTypes.includes(value[0].type))),
});

export default fileSchema;
