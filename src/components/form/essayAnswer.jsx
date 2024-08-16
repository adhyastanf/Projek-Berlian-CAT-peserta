'use client';
import useQuestionStore from '@/store/quiz-store';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import axios from 'axios';
import useAuth from '@/store/auth-store';

const EssayAnswer = ({ questionId, soalText, noUjian }) => {
  const { questions, selectAnswer } = useQuestionStore();
  const { kodeDesa } = useAuth();
  const question = questions.find((q) => q.soalText === questionId);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (question) {
      reset({ essayText: question.jawaban || '' });
    }
  }, [questionId, question, reset]);

  const onSubmit = async (data) => {
    try {
      await axios.put('http://18.141.142.63:8080/submit-soal', {
        soalText: questionId,
        jawabanText: data.essayText,
        noUjian,
        kodeDesa,
      });

      selectAnswer(questionId, { jawabanText: data.essayText });
    } catch (error) {
      console.error('Error submitting essay:', error);
    }
  };

  return (
    <div className='flex flex-col gap-4 w-full max-w-7xl px-4'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <input {...register('essayText')} className={`textarea textarea-bordered w-full h-30 p-4 text-sm text-gray-700  ${errors.essayText ? 'border-red-500' : ''}`} placeholder='Tulis jawaban Anda di sini...' />
        <button type='submit' className='btn btn-primary bg-third text-white mt-2 self-center'>
          Kirim Jawaban
        </button>
        <p className='text-xs'>Klik Tombol Kirim Jawaban Supaya Jawaban disimpan</p>
      </form>
    </div>
  );
};

export default EssayAnswer;
