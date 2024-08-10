'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import pesertaSchema from '@/schema/pesertaSchema';
import { createPeserta } from '@/actions/createPeserta';

const FormDisplay = () => {
  const pendidikanOptions = [
    { label: 'SMA/Sederajat', value: 'SMA/Sederajat' },
    { label: 'S1', value: 'S1' },
    { label: 'S2', value: 'S2' },
  ];

  const jenisKelaminOptions = [
    { label: 'Laki-Laki', value: 'Laki-Laki' },
    { label: 'Perempuan', value: 'Perempuan' },
  ];

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(pesertaSchema),
  });

  const pesertaAction = handleSubmit(async (data) => {
    try {
      const peserta = await createPeserta(data);
      console.log(peserta);
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <form action={pesertaAction}>

      <label>Nomor Ujian : </label>
      <input type='text' {...register('nomor_ujian')} />
      <br />

      <label>Nama Lengkap : </label>
      <input type='text' {...register('nama_lengkap')} />
      <br />

      <label>Jenis Kelamin : </label>
      {jenisKelaminOptions.map((val, index) => {
        return (
          <div key={index}>
            <input id={index} type='radio' value={val.value} {...register('jenis_kelamin')} />
            <label>
              <span>{val.label}</span>
            </label>
          </div>
        );
      })}
      <br />

      <label>Pendidikan Terakhir : </label>
      {pendidikanOptions.map((val, index) => {
        return (
          <div key={index}>
            <input type='radio' value={val.value} {...register('pendidikan_terakhir')} />
            <label>
              <span>{val.label}</span>
            </label>
          </div>
        );
      })}
      <br />

      <label htmlFor='alamat'>Alamat : </label>
      <input type='text' {...register('alamat')} />
      <br />

      <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default FormDisplay;
