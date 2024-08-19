'use client';

import createPeserta from '@/actions/createPeserta';
import pesertaSchema from '@/schema/pesertaSchema';
import useAuth from '@/store/auth-store';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormDisplay = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const pendidikanOptions = [
    { label: 'SMA/Sederajat', value: 'SMA/Sederajat' },
    { label: 'S1', value: 'S1' },
    { label: 'S2', value: 'S2' },
  ];

  const jenisKelaminOptions = [
    { label: 'Laki-Laki', value: 'Laki-Laki' },
    { label: 'Perempuan', value: 'Perempuan' },
  ];

  const kodeDesaOptions = [
    // { label: 'Desa Harjasari', value: 1 },
    // { label: 'Desa Suradadi', value: 2 },
    { label: 'Desa Simulasi', value: 3 },
    
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(pesertaSchema),
  });

  const pesertaAction = handleSubmit(async (data) => {
    setIsLoading(true);
    setFormError('');
    try {
      const peserta = await createPeserta(data);
      login(peserta);
      router.push('/sesi')
    } catch (err) {
      setFormError(err.message || 'Terjadi kesalahan, silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div className='flex items-center justify-center'>
      <form onSubmit={pesertaAction} className='bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Nomor Ujian:</label>
          <input type='text' {...register('nomor_ujian')} className={`input input-bordered w-full ${errors.nomor_ujian ? 'input-error' : ''}`} placeholder='001' />
          {errors.nomor_ujian && <p className='text-red-500 text-xs italic'>{errors.nomor_ujian.message}</p>}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Nama Lengkap:</label>
          <input type='text' {...register('nama_lengkap')} className={`input input-bordered w-full ${errors.nama_lengkap ? 'input-error' : ''}`} placeholder='James Theo' />
          {errors.nama_lengkap && <p className='text-red-500 text-xs italic'>{errors.nama_lengkap.message}</p>}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Jenis Kelamin:</label>
          {jenisKelaminOptions.map((val, index) => (
            <div key={index} className='flex items-center mb-2'>
              <input id={`jenis_kelamin_${index}`} type='radio' value={val.value} {...register('jenis_kelamin')} className='radio radio-primary' />
              <label htmlFor={`jenis_kelamin_${index}`} className='ml-2'>
                {val.label}
              </label>
            </div>
          ))}
          {errors.jenis_kelamin && <p className='text-red-500 text-xs italic'>{errors.jenis_kelamin.message}</p>}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Pendidikan Terakhir:</label>
          {pendidikanOptions.map((val, index) => (
            <div key={index} className='flex items-center mb-2'>
              <input id={`pendidikan_terakhir_${index}`} type='radio' value={val.value} {...register('pendidikan_terakhir')} className='radio radio-primary' />
              <label htmlFor={`pendidikan_terakhir_${index}`} className='ml-2'>
                {val.label}
              </label>
            </div>
          ))}
          {errors.pendidikan_terakhir && <p className='text-red-500 text-xs italic'>{errors.pendidikan_terakhir.message}</p>}
        </div>

        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='alamat'>
            Alamat:
          </label>
          <input type='text' {...register('alamat')} className={`input input-bordered w-full ${errors.alamat ? 'input-error' : ''}`} placeholder='Jl. Melati 14 No. 102' />
          {errors.alamat && <p className='text-red-500 text-xs italic'>{errors.alamat.message}</p>}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Desa:</label>
          {/* <select {...register('kode_desa')} defaultValue={1} className={`select select-bordered w-full ${errors.kode_desa ? 'select-error' : ''}`}> */}
          <select {...register('kode_desa')} defaultValue={3} className={`select select-bordered w-full ${errors.kode_desa ? 'select-error' : ''}`}>
            <option value=''>Pilih Nama Desa</option>
            {kodeDesaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.kode_desa && <p className='text-red-500 text-xs italic'>{errors.kode_desa.message}</p>}
        </div>

        <div className='flex items-center justify-between'>
          <button type='submit' className='btn btn-primary bg-third text-white w-full' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Kirim'}
          </button>
        </div>
        {formError && <p className='text-red-500 text-xs italic mb-4'>{formError}</p>}
      </form>
    </div>
  );
};

export default FormDisplay;
