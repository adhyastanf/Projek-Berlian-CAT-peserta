'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import fileSchema from '@/schema/filesSchema';
import useQuestion2Store from '@/store/quiz2-store';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Quiz2Answers = ({ data }) => {
  const { goNextQuestion, goPreviousQuestion, onCompleteQuestions, currentQuestion, questions, saveUploadedFileName, isLoading, setLoading, reset: resetQ } = useQuestion2Store();
  // console.log(data)
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(fileSchema),
  });

  // Load the uploaded file from local storage or server on mount
  useEffect(() => {
    const storedFileName = localStorage.getItem(`uploadedFile-${currentQuestion}`);
    if (storedFileName) {
      setValue('file', { name: storedFileName }); // Set the uploaded file name on form
      saveUploadedFileName(storedFileName); // Save it to the store as well
    }
  }, [currentQuestion, setValue, saveUploadedFileName]);

  const uploadFile = async (formData) => {
    if (formData.file.length) {
      const fileData = new FormData();
      fileData.append('file', formData.file[0]);

      setLoading(true);

      try {
        const response = await axios.post('/api/upload-file', fileData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const { fileName } = response.data;
        saveUploadedFileName(fileName);

        // Save the new file name to local storage
        localStorage.setItem(`uploadedFile-${currentQuestion}`, fileName);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFileUpload = async (formData) => {
    await uploadFile(formData);
  };

  const onSubmit = async (formData) => {
    if (currentQuestion + 1 === 2) {
      if (confirm('Apakah anda sudah yakin dengan jawaban anda?')) {
        onCompleteQuestions();
        resetQ();
        router.push('/sesi'); // Redirect to the session page
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
      <form onSubmit={handleSubmit(handleFileUpload)} className='flex flex-col gap-y-4 justify-center w-full'>
        {currentQuestion + 1 === 1 && (
          <a href={data?.linkFile} className='btn btn-primary text-white mb-14'>
            DOWNLOAD FILE
          </a>
        )}
        <input
          type='file'
          accept='.doc,.docx,.xls,.xlsx,.csv' // Restrict file types
          {...register('file')}
          className={`file-input file-input-bordered w-full ${errors.file ? 'border-red-500' : ''}`}
          disabled={isLoading}
        />
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
        <button onClick={handleSubmit(onSubmit)} className='bg-purple py-2 px-4 rounded-lg shadow-lg btn-primary bg-third text-white font-semibold text-sm' disabled={isLoading}>
          {currentQuestion + 1 === 2 ? 'Selesaikan' : 'Berikutnya'}
        </button>
      </div>
    </>
  );
};

export default Quiz2Answers;
