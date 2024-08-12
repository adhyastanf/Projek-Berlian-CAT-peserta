'use client';
import useQuestion2Store from '@/store/quiz2-store';
import Quiz2Answers from './quiz2Answers';
import CurrentQuestion from './current-question2';

const Game2 = () => {
  const { questions, currentQuestion, selectAnswer, goNextQuestion } = useQuestion2Store();
  const question = questions[currentQuestion];

  return (
    <div className='flex flex-col items-center gap-4 lg:px-6 lg:py-4 w-full'>
      <div className='flex flex-col gap-4 w-full max-w-7xl px-4'>
        <p className='italic text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300'>
          Pertanyaan {currentQuestion + 1} dari {questions.length}
        </p>
        <CurrentQuestion data={question} />
      </div>

      <div className='flex flex-col gap-4 w-full max-w-7xl px-4'>
        <div className='w-full'>
          <Quiz2Answers data={question?.options} questionId={question?._id} handleAnswer={selectAnswer} goNextQuestion={goNextQuestion} jawaban={question?.jawaban} questionType={question?.type} />
        </div>
      </div>
    </div>
  );
};

export default Game2;
