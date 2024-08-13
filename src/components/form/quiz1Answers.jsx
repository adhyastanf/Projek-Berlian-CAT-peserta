'use client';
import useQuestionStore from '@/store/quiz-store';
import { useState, useEffect } from 'react';
import Answer from './answer1';
import axios from 'axios';
import EssayAnswer from './essayAnswer';
import { useRouter } from 'next/navigation';

const Quiz1Answers = ({ data, handleAnswer, questionId, goNextQuestion, jawaban, questionType }) => {
  const [selectedAns, setSelectedAns] = useState(jawaban || '');
  const [submitted, setSubmitted] = useState(false);
  const { questions, onCompleteQuestions, currentQuestion, goPreviousQuestion, reset } = useQuestionStore();
  const isCorrectUserAnswer = questions.find((q) => q._id === questionId)?.isCorrectUserAnswer;
  const router = useRouter();

  useEffect(() => {
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

    try {
      await axios.post('/api/submit-answer', {
        questionId,
        selectedAnswerId: answer._id,
      });
      handleAnswer(questionId, answer);
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  const submitAnswer = async () => {
    if (questionType === 'multiple-choice') {
      if (selectedAns && !submitted) {
        try {
          await axios.post('/api/submit-answer', {
            questionId,
            selectedAnswerId: selectedAns._id,
          });
          handleAnswer(questionId, selectedAns);
          setSubmitted(true);
        } catch (error) {
          console.error('Error submitting answer:', error);
        }
      }
    }
  };

  const handleNextQuestion = async () => {
    await submitAnswer();

    if (questionType === 'essay') {
      setSubmitted(false);
    }

    if (isLastQuestion) {
      if (confirm('Apakah mau selesai?')) {
        onCompleteQuestions();
        // reset()
        router.push('/sesi');
      }
    } else {
      goNextQuestion();
    }
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

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <>
      <ul className='flex flex-col gap-y-4 justify-center w-full'>
        {questionType === 'multiple-choice' ? (
          <ul className='flex flex-col gap-y-4 justify-center w-full'>
            {data?.map((answer, index) => (
              <Answer key={answer._id} answer={answer} selectedAns={selectedAns} isCorrectUserAnswer={isCorrectUserAnswer} handleSelectAnswer={handleSelectAnswer} index={index} answerLabels={answerLabels} />
            ))}
          </ul>
        ) : (
          <EssayAnswer questionId={questionId} />
        )}
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

export default Quiz1Answers;
