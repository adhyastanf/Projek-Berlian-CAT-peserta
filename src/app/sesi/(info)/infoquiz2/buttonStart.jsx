'use client';

import { useState, useEffect } from 'react';
import useCountdownStoreuiz1 from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';

export default function ButtonStartQuiz() {
  const { hasCompleteAll } = useQuestionStore();
  const { isQuestionPlayable } = useCountdownStoreuiz1();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a flag to indicate that client-side rendering has started
    setIsLoading(false);
  }, []);

  // Early return if not client-side yet
  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      {!isQuestionPlayable() || hasCompleteAll ? (
        <div className='bg-green-100 text-green-800 font-bold mt-8 py-2 px-4 rounded-lg shadow-md'>
          <span>Score: </span>
          <span className='text-2xl'>100 / 100</span>
        </div>
      ) : (
        <button className='btn btn-primary'>Mulai</button>
      )}
    </div>
  );
}
