'use client';
import { submitEssay } from '@/actions/submitEssay';
import essaySchema from '@/schema/essaySchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const EssayAnswer = ({ questionId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(essaySchema),
  });

  const onSubmit = async (data) => {
    try {
      await submitEssay(questionId, data.essayText);
    } catch (error) {
      console.error('Error submitting essay:', error);
    }
  };

  return (
    <div className='flex flex-col gap-4 w-full max-w-7xl px-4'>
      <form action={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <input {...register('essayText')} className={`textarea textarea-bordered w-full h-30 p-4 text-sm text-gray-700 dark:text-gray-300 ${errors.essayText ? 'border-red-500' : ''}`} placeholder='Tulis jawaban Anda di sini...' />
        <button type='submit' className='btn btn-primary bg-third text-white mt-2 self-center'>
          Kirim Jawaban
        </button>
        <p className='text-xs'>Klik Tombol Kirim Jawaban Supaya Jawaban disimpan</p>
      </form>
    </div>
  );
};

export default EssayAnswer;
