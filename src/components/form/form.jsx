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
    <div className="flex items-center justify-center">
      <form action={pesertaAction} className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nomor Ujian:</label>
          <input
            type='text'
            {...register('nomor_ujian')}
            className={`input input-bordered w-full ${errors.nomor_ujian ? 'input-error' : ''}`}
            placeholder='001'
          />
          {errors.nomor_ujian && <p className="text-red-500 text-xs italic">{errors.nomor_ujian.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap:</label>
          <input
            type='text'
            {...register('nama_lengkap')}
            className={`input input-bordered w-full ${errors.nama_lengkap ? 'input-error' : ''}`}
            placeholder='James Theo'
          />
          {errors.nama_lengkap && <p className="text-red-500 text-xs italic">{errors.nama_lengkap.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Jenis Kelamin:</label>
          {jenisKelaminOptions.map((val, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                id={`jenis_kelamin_${index}`}
                type='radio'
                value={val.value}
                {...register('jenis_kelamin')}
                className="radio radio-primary"
              />
              <label htmlFor={`jenis_kelamin_${index}`} className="ml-2">
                {val.label}
              </label>
            </div>
          ))}
          {errors.jenis_kelamin && <p className="text-red-500 text-xs italic">{errors.jenis_kelamin.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Pendidikan Terakhir:</label>
          {pendidikanOptions.map((val, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                id={`pendidikan_terakhir_${index}`}
                type='radio'
                value={val.value}
                {...register('pendidikan_terakhir')}
                className="radio radio-primary"
              />
              <label htmlFor={`pendidikan_terakhir_${index}`} className="ml-2">
                {val.label}
              </label>
            </div>
          ))}
          {errors.pendidikan_terakhir && <p className="text-red-500 text-xs italic">{errors.pendidikan_terakhir.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='alamat'>
            Alamat:
          </label>
          <input
            type='text'
            {...register('alamat')}
            className={`input input-bordered w-full ${errors.alamat ? 'input-error' : ''}`}
            placeholder='Jl. Melati 14 No. 102'
          />
          {errors.alamat && <p className="text-red-500 text-xs italic">{errors.alamat.message}</p>}
        </div>

        <div className="flex items-center justify-between">
          <button type='submit' className="btn btn-primary w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDisplay;
