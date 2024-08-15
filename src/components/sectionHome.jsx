'use client';

import { useState, useEffect } from 'react';
import useCountdownStore from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';
import useQuestion2Store from '@/store/quiz2-store';
import { useRouter } from 'next/navigation';
import useAuth from '@/store/auth-store';
import Image from 'next/image';
import Hero from '../../public/hero.jpg';

export default function SectionHome() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // State management for Quiz 1
  const { fetchRemainingTime, isQuestionPlayable } = useCountdownStore();
  const { hasCompletedSection1, isQuiz1Finished, isQuiz1Restricted, score, updateQuizStatus, fetchStatusQuiz } = useQuestionStore();

  // State management for Quiz 2
  const { hasCompletedSection2, isQuiz2Finished, isQuiz2Restricted, isSection2Locked, updateQuizStatus: updateQuiz2Status, fetchStatusQuiz2 } = useQuestion2Store();

  const { isAuth, noUjian, kodeDesa } = useAuth();

  useEffect(() => {
    const loadStatus = async () => {
      // Fetch and update status for both quizzes
      await fetchStatusQuiz(noUjian, kodeDesa);
      await fetchStatusQuiz2(noUjian, kodeDesa);

      // Fetch the remaining time for each section
      await fetchRemainingTime(1); // Fetch time for section 1
      await fetchRemainingTime(2); // Fetch time for section 2

      setLoading(false); // Mark loading as complete
    };

    loadStatus();
  }, [noUjian, kodeDesa, fetchStatusQuiz, fetchStatusQuiz2, fetchRemainingTime]);

  // Determine the disabled status for each quiz
  const isQuiz1Disabled = isQuiz1Finished || isQuiz1Restricted || !isQuestionPlayable(1);
  const isQuiz2Disabled = !hasCompletedSection1 || isSection2Locked || isQuiz2Finished || isQuiz2Restricted || !isQuestionPlayable(2);

  if (loading) {
    return <div></div>; // Display loading indicator
  }

  return (
    <div>
      <Image src={Hero} width='100%' height='100%' alt='hero' className='absolute' />
      <div className='flex items-center justify-center h-screen relative'>
        <div className='space-y-6 text-center'>
          <section>
            <button
              disabled={isQuiz1Disabled}
              onClick={() => router.push('/sesi/quiz1')}
              className={`w-full py-5 px-10 rounded-lg font-semibold text-white transition-all duration-300 ${
                !isQuiz1Disabled ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl' : 'bg-gray-400 cursor-not-allowed flex items-center justify-between gap-2'
              }`}
            >
              <span>TES UJIAN TERTULIS CAT</span>
              {hasCompletedSection1 && <span className='bg-white text-blue-600 font-bold py-1 px-3 rounded-full'>{`${score} / 100`}</span>}
            </button>
          </section>
          <section>
            <button
              disabled={isQuiz2Disabled}
              onClick={() => router.push('/sesi/quiz2')}
              className={`w-full py-5 px-10 rounded-lg font-semibold text-white transition-all duration-300 ${!isQuiz2Disabled ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              <span>TES UJIAN KOMPUTER</span>
            </button>
          </section>
          <section>
            <button onClick={() => router.push('/sesi/infoquiz3')} className={'w-full py-5 px-10 rounded-lg font-semibold text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'}>
              <span>TES WAWANCARA</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
