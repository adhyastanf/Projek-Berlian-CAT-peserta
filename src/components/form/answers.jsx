'use client';
import useQuestionStore from '@/store/quiz-store';
import { useState, useEffect } from 'react';
import Answer from './answer';
import axios from 'axios'; // Impor axios untuk panggilan API

const Answers = ({ data, handleAnswer, questionId, goNextQuestion, jawaban, questionType }) => {
  const [selectedAns, setSelectedAns] = useState(jawaban || '');
  const [submitted, setSubmitted] = useState(false);
  const { questions, onCompleteQuestions, currentQuestion, goPreviousQuestion } = useQuestionStore();
  const isCorrectUserAnswer = questions.find((q) => q._id === questionId)?.isCorrectUserAnswer;

  useEffect(() => {
    // Jika jawaban sudah ada dari database, setel sebagai jawaban yang dipilih
    if (jawaban) {
      setSelectedAns(jawaban);
    }
  }, [jawaban]);

  const answerLabels = ['A', 'B', 'C', 'D'];

  const handleSelectAnswer = async (answer) => {
    if (submitted) return;
    if (selectedAns._id === answer._id) {
      setSelectedAns('');
      return;
    }
    setSelectedAns(answer);

    // Kirim jawaban yang dipilih ke API setiap kali pengguna memilih opsi
    try {
      await axios.post('/api/submit-answer', {
        questionId,
        selectedAnswerId: answer._id, // Kirim hanya ID opsi
      });

      // Update status lokal
      handleAnswer(questionId, answer);
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  const submitAnswer = async () => {
    // Kirim ID jawaban yang dipilih ke API jika ada jawaban yang dipilih
    if (selectedAns && !submitted) {
      try {
        await axios.post('/api/submit-answer', {
          questionId,
          selectedAnswerId: selectedAns._id, // Kirim hanya ID opsi
        });

        // Update status lokal
        handleAnswer(questionId, selectedAns);
        setSubmitted(true);
      } catch (error) {
        console.error('Error submitting answer:', error);
      }
    }
  };

  const handleNextQuestion = async () => {
    await submitAnswer();
    if (isLastQuestion) {
      onCompleteQuestions(); // Memanggil fungsi onCompleteQuestions jika ini adalah pertanyaan terakhir
    } else {
      goNextQuestion();
    }
    resetState();
  };

  const handlePreviousQuestion = async () => {
    await submitAnswer();
    goPreviousQuestion();
    resetState();
  };

  const resetState = () => {
    setSubmitted(false);
    setSelectedAns('');
  };

  // Periksa apakah soal saat ini adalah soal terakhir
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <>
      <ul className='flex flex-col gap-y-4 justify-center w-full'>
        {data?.map((answer, index) => (
          <Answer key={answer._id} answer={answer} selectedAns={selectedAns} isCorrectUserAnswer={isCorrectUserAnswer} handleSelectAnswer={handleSelectAnswer} index={index} answerLabels={answerLabels} />
        ))}
      </ul>

      <div className='flex justify-between mt-4'>
        <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0} className='btn btn-primary'>
          Kembali
        </button>
        <button onClick={handleNextQuestion} className='bg-purple py-2 px-4 rounded-lg shadow-lg text-black font-semibold text-sm'>
          {isLastQuestion ? 'Selesaikan' : 'Berikutnya'}
        </button>
      </div>
    </>
  );
};

export default Answers;
