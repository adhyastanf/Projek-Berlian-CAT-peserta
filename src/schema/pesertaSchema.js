import { object, string } from 'yup';

let pesertaSchema = object({
  nomor_ujian: string().required('Nomor Ujian Harus Diisi'),
  nama_lengkap: string().required('Nama Lengkap Harus Diisi'),
  jenis_kelamin: string().required('Jenis Kelamin Harus Diisi'),
  pendidikan_terakhir: string().required('Pendidikan Terakhir Harus Diisi'),
  alamat: string().required('Alamat Harus Diisi'),
});

export default pesertaSchema;
