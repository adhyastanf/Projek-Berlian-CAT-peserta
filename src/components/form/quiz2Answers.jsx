'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import fileSchema from '@/schema/filesSchema';
import useQuestion2Store from '@/store/quiz2-store';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/store/auth-store';

const Quiz2Answers = ({ data }) => {
  const { goNextQuestion, goPreviousQuestion, onCompleteQuestions, currentQuestion, questions, saveUploadedFileName, isLoading, setLoading, markQuestionAsAnswered } = useQuestion2Store();
  const { noUjian, kodeDesa } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(fileSchema),
  });

  useEffect(() => {
    const storedFileName = localStorage.getItem(`uploadedFile-${currentQuestion}`);
    if (storedFileName) {
      setValue('file', { name: storedFileName });
      saveUploadedFileName(storedFileName);
    }
  }, [currentQuestion, setValue, saveUploadedFileName]);

  const uploadFile = async (formData) => {
    if (formData.file.length) {
      const fileData = new FormData();
      fileData.append('file', formData.file[0]); // Append the file itself
      fileData.append('noUjian', noUjian);
      fileData.append('kodeDesa', kodeDesa);
      fileData.append('tipeSoal', formData.file[0].name.split('.').pop()); // Extract the file extension

      setLoading(true);

      try {
        const response = await axios.post('http://3.0.20.136:8080/upload', fileData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const { fileName } = response.data;
        saveUploadedFileName(fileName);

        // Mark the question as answered only after successful upload
        markQuestionAsAnswered(currentQuestion);

        localStorage.setItem(`uploadedFile-${currentQuestion}`, fileName);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const onSubmit = async (formData) => {
    await uploadFile(formData);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 === questions.length) {
      // If this is the last question, prompt confirmation
      const confirmComplete = confirm('Apakah anda sudah yakin dengan jawaban anda?');
      if (confirmComplete) {
        onCompleteQuestions(noUjian, kodeDesa);
        router.push('/sesi'); // Redirect after completing the quiz
      }
    } else {
      goNextQuestion();
      reset();
    }
  };

  const handlePreviousQuestion = () => {
    goPreviousQuestion();
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4 justify-center w-full'>
        {currentQuestion + 1 === 1 && (
          <a href={data?.linkFile} className='btn btn-primary text-white mb-14'>
            DOWNLOAD FILE
          </a>
        )}
        <input type='file' accept='.doc,.docx,.xls,.xlsx,.csv' {...register('file')} className={`file-input file-input-bordered w-full ${errors.file ? 'border-red-500' : ''}`} disabled={isLoading} />
        {errors.file && <p className='text-red-500 text-sm'>{errors.file.message}</p>}
        <button type='submit' className='btn btn-primary bg-third text-white mt-2 self-center' disabled={isLoading}>
          {isLoading ? 'Mengirim Jawaban...' : 'Kirim Jawaban'}
        </button>
        <p className='text-xs'>Klik Tombol Kirim Jawaban Supaya Jawaban disimpan</p>
      </form>

      <div className='flex justify-between mt-4'>
        <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0 || isLoading} className='btn bg-gray-400 text-white'>
          Kembali
        </button>
        <button onClick={handleNextQuestion} className='bg-purple py-2 px-4 rounded-lg shadow-lg btn-primary bg-third text-white font-semibold text-sm' disabled={isLoading}>
          {currentQuestion + 1 === questions.length ? 'Selesaikan' : 'Berikutnya'}
        </button>
      </div>
    </>
  );
};

export default Quiz2Answers;
