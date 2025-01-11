'use client';
import { fetchSubmitSoal } from '@/helpers/service';
import useAuth from '@/store/auth-store';
import useQuestionStore from '@/store/quiz-store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Answer from './Answer';
import EssayAnswer from './EssayAnswer';

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

  const handleSelectAnswer = async (answer) => {
    if (selectedAns !== answer.optionText) {
      setSelectedAns(answer.optionText);

      handleAnswer(questionId, { ...answer, optionText: answer.optionText, jawaban: answer.optionText });

      const body = {
        jawabanText: answer.optionText,
        soalText,
        noUjian: noUjian,
        kodeDesa,
      };
      try {
        await fetchSubmitSoal(body);
      } catch (error) {
        console.error('Error submitting answer:', error);
      }
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
