'use client';
import useQuestionStore from '@/store/quiz-store';
import CurrentQuestion from './current-question';
import Answers from './answers';
// import Progress from '../atoms/progress';
// import { MotionDiv } from '../animated/motion-div';
// import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Game = () => {
  const { questions, currentQuestion, selectAnswer, goNextQuestion } = useQuestionStore();
  const question = questions[currentQuestion];

  console.log(question);

  // const [shouldAnimateQuestion, setShouldAnimateQuestion] = useState(false);
  // const [shouldAnimateAnswers, setShouldAnimateAnswers] = useState(false);

  // useEffect(() => {
  //   setShouldAnimateQuestion(true);
  //   setShouldAnimateAnswers(true); // Reset answers animation
  // }, [currentQuestion]);

  return (
    <>
      <div className='flex flex-col xl:justify-center xl:items-center gap-2 lg:px-6 w-full max-h-96 lg:mt-16 xl:mt-0 xl:max-h-full'>
        <div>
          {/* {shouldAnimateQuestion && ( */}
          <div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={currentQuestion} className='flex flex-col gap-4'>
            <p className='italic xs:text-sm md:text-md text-gray-navy dark:text-light-blue xl:text-xl'>
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <CurrentQuestion data={question} />
          </div>
        </div>

        <div>
          {/* {shouldAnimateQuestion && ( */}
          <div
            className='xs:mt-2 lg:mt-auto xl:mt-20 w-full'
            key={currentQuestion} // Ensure to provide a unique key for React to handle animations correctly
          >
            {/* <Progress total={questions.length} currentIndex={currentQuestion + 1} /> */}
          </div>
        </div>
      </div>
      <div initial={false} mode='wait' onExitComplete={() => setShouldAnimateAnswers(true)}>
        {/* {shouldAnimateAnswers && ( */}
        <div
          className='flex flex-col gap-y-4 justify-center w-full'
          key={currentQuestion} // Ensure to provide a unique key for React to handle animations correctly
        >
          <Answers data={question?.options} questionId={question?._id} handleAnswer={selectAnswer} goNextQuestion={goNextQuestion} />
        </div>
        
      </div>
    </>
  );
};

export default Game;
