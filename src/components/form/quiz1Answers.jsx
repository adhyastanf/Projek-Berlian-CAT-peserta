'use client';
import useQuestionStore from '@/store/quiz-store';
import { useState, useEffect } from 'react';
import Answer from './answer1';
import axios from 'axios';
import EssayAnswer from './essayAnswer';
import { useRouter } from 'next/navigation';
import useAuth from '@/store/auth-store';

const Quiz1Answers = ({ data, handleAnswer, questionId, goNextQuestion, jawaban, questionType, soalText, noUjian }) => {
  const [selectedAns, setSelectedAns] = useState('');
  const { questions, onCompleteQuestions, currentQuestion, goPreviousQuestion } = useQuestionStore();
  const { kodeDesa } = useAuth();
  const isCorrectUserAnswer = questions.find((q) => q.soal === questionId)?.isCorrectUserAnswer;
  const router = useRouter();

  useEffect(() => {
    setSelectedAns(jawaban || '');
  }, [jawaban, questionId]);

  const answerLabels = ['A', 'B', 'C', 'D'];

  const handleSelectAnswer = (answer) => {
    if (selectedAns !== answer.optionText) {
      setSelectedAns(answer.optionText);

      // Immediately update the global state with the selected answer
      handleAnswer(questionId, { ...answer, optionText: answer.optionText, jawaban: answer.optionText });

      // Make an async API call to save the answer, but don't wait for it to complete
      axios
        .put('http://54.251.29.86:8080/submit-soal', {
          // questionId,
          jawabanText: answer.optionText,
          soalText,
          noUjian: noUjian,
          kodeDesa,
        })
        .catch((error) => {
          console.error('Error submitting answer:', error);
        });
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      if (confirm('Apakah anda sudah yakin dengan jawaban anda?')) {
        onCompleteQuestions(noUjian, kodeDesa);
        router.push('/sesi');
      }
    } else {
      goNextQuestion();
    }
  };

  const handlePreviousQuestion = () => {
    goPreviousQuestion();
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <>
      <ul className='flex flex-col gap-y-4 justify-center w-full'>
        {questionType === 'soal' && (
          <ul className='flex flex-col gap-y-4 justify-center w-full'>
            {data?.map((answer, index) => (
              <Answer key={answer.optionText} answer={answer} selectedAns={selectedAns} isCorrectUserAnswer={isCorrectUserAnswer} handleSelectAnswer={handleSelectAnswer} index={index} answerLabels={answerLabels} />
            ))}
          </ul>
        )}
        {questionType === 'isian' && <EssayAnswer questionId={soalText} soalText={soalText} noUjian={noUjian} />}
      </ul>

      <div className='flex justify-between mt-4'>
        <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0} className='btn bg-gray-400 text-white'>
          Kembali
        </button>
        <button onClick={handleNextQuestion} className='btn btn-primary bg-third text-white '>
          {isLastQuestion ? 'Selesaikan' : 'Berikutnya'}
        </button>
      </div>
    </>
  );
};

export default Quiz1Answers;
