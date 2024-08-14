'use client';
import useQuestionStore from '@/store/quiz-store';
import Quiz1Answers from './quiz1Answers';
import CurrentQuestion from './current-question1';
import useAuth from '@/store/auth-store';

const Game = () => {
  const { questions, currentQuestion, selectAnswer, goNextQuestion } = useQuestionStore();
  const { noUjian } = useAuth();
  const question = questions[currentQuestion];

  return (
    <div className="flex flex-col items-center gap-4 lg:px-6 lg:py-4 w-full">
      <div className="flex flex-col gap-4 w-full max-w-7xl px-4">
        <p className='italic text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300'>
          Pertanyaan {currentQuestion + 1} dari {questions.length}
        </p>
        <CurrentQuestion data={question} />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-7xl px-4">
        <div className='w-full'>
          <Quiz1Answers data={question?.options} questionId={question?.soal} handleAnswer={selectAnswer} goNextQuestion={goNextQuestion} jawaban={question?.jawaban} questionType={question?.jenis} soalText={question?.soalText} noUjian={noUjian}/>
        </div>
      </div>
    </div>
  );
};

export default Game;
