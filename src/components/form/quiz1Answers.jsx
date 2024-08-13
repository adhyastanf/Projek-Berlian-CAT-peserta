'use client';
import useQuestionStore from '@/store/quiz-store';
import { useState, useEffect } from 'react';
import Answer from './answer1';
import axios from 'axios';
import EssayAnswer from './essayAnswer';
import { useRouter } from 'next/navigation';

const Quiz1Answers = ({ data, handleAnswer, questionId, goNextQuestion, jawaban, questionType, soalText }) => {
  const [selectedAns, setSelectedAns] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { questions, onCompleteQuestions, currentQuestion, goPreviousQuestion } = useQuestionStore();
  const isCorrectUserAnswer = questions.find((q) => q.soal === questionId)?.isCorrectUserAnswer;
  const router = useRouter();

  useEffect(() => {
    // Reset the state when the question changes
    setSelectedAns(jawaban || '');
    setSubmitted(false);
  }, [jawaban, questionId]);

  const answerLabels = ['A', 'B', 'C', 'D'];

  const handleSelectAnswer = async (answer) => {
    if (submitted) return;

    // Toggle select/deselect logic
    const newSelectedAns = selectedAns === answer.optionText ? '' : answer.optionText;
    setSelectedAns(newSelectedAns);

    // Only send the API request if an option is selected (not deselected)
    if (newSelectedAns) {
      try {
        await axios.post('/api/submit-answer', {
          questionId,
          jawabanText: newSelectedAns,
          soalText,
        });
        handleAnswer(questionId, { ...answer, optionText: newSelectedAns });
      } catch (error) {
        console.error('Error submitting answer:', error);
      }
    } else {
      // Handle the deselect case without making an API request
      handleAnswer(questionId, { ...answer, optionText: '' });
    }
  };

  const submitAnswer = async () => {
    if (questionType === 'soal' && selectedAns && !submitted) {
      try {
        await axios.post('/api/submit-answer', {
          questionId,
          jawabanText: selectedAns,
          soalText,
        });
        handleAnswer(questionId, { optionText: selectedAns });
        setSubmitted(true);
      } catch (error) {
        console.error('Error submitting answer:', error);
      }
    }
  };

  const handleNextQuestion = async () => {
    await submitAnswer();

    if (isLastQuestion) {
      if (confirm('Apakah mau selesai?')) {
        onCompleteQuestions();
        router.push('/sesi');
      }
    } else {
      goNextQuestion();
    }
  };

  const handlePreviousQuestion = async () => {
    await submitAnswer();
    goPreviousQuestion();
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <>
      <ul className='flex flex-col gap-y-4 justify-center w-full'>
        {questionType === 'soal' ? (
          <ul className='flex flex-col gap-y-4 justify-center w-full'>
            {data?.map((answer, index) => (
              <Answer
                key={answer.optionText}
                answer={answer}
                selectedAns={selectedAns}
                isCorrectUserAnswer={isCorrectUserAnswer}
                handleSelectAnswer={handleSelectAnswer}
                index={index}
                answerLabels={answerLabels}
              />
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
