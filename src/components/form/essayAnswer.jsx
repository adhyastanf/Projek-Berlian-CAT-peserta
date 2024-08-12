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
        <textarea {...register('essayText')} className={`textarea textarea-bordered w-full h-40 p-4 text-sm text-gray-700 dark:text-gray-300 ${errors.essayText ? 'border-red-500' : ''}`} placeholder='Tulis jawaban esai Anda di sini...' />
        <button type='submit' className='btn btn-primary mt-2'>
          Kirim Jawaban Esai
        </button>
        <p className='text-xs'>Klik Tombol Kirim Jawaban Esai Supaya Jawaban disimpan</p>
      </form>
    </div>
  );
};

export default EssayAnswer;
