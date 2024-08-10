'use client';
import { cn } from '@/lib/utils';
import useQuestionStore from '@/store/quiz-store';
import Image from 'next/image';
import { useState } from 'react';
import Answer from './answer';

const Answers = ({ data, handleAnswer, questionId, goNextQuestion }) => {
  const [selectedAns, setSelectedAns] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { questions, onCompleteQuestions } = useQuestionStore();
  console.log(questions);
  const isCorrectUserAnswer = questions.find((q) => q._id === questionId)?.isCorrectUserAnswer;

  console.log(isCorrectUserAnswer);
  console.log(selectedAns);
  const answerLabels = ['A', 'B', 'C', 'D'];

  const handleSelectAnswer = (answer) => {
    if (submitted) return;
    if (selectedAns === answer) {
      setSelectedAns('');
      return;
    }
    setSelectedAns(answer);
  };

  const handleSubmit = () => {
    if (submitted) {
      if (questions.every((q) => q.userSelectedAnswer != null)) {
        onCompleteQuestions();
        return;
      }
      goNextQuestion();
      setSelectedAns('');
      setSubmitted(false);
      return;
    }
    if (!selectedAns) return;
    handleAnswer(questionId, selectedAns);
    setSubmitted(true);
  };

  console.log(data);

  return (
    <>
      <ul className='flex flex-col gap-y-4 justify-center w-full'>
        {data?.map((answer, index) => (
          <Answer key={answer} answer={answer} selectedAns={selectedAns} isCorrectUserAnswer={isCorrectUserAnswer} handleSelectAnswer={handleSelectAnswer} index={index} answerLabels={answerLabels} />
        ))}
      </ul>

      <button onClick={handleSubmit} className='w-full bg-purple py-4 px-5 rounded-xl shadow-lg text-black font-semibold text-lg text-center'>
        {submitted ? 'Next Question' : 'Submit Answer'}
      </button>
      {submitted && (
        <div className='mt-4 text-lg font-bold'>
          {isCorrectUserAnswer ? 'Benar' : 'Salah'}
        </div>
      )}
    </>
  );
};

export default Answers;
