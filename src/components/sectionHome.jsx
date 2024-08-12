'use client';
import useCountdownStore from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';
import useQuestion2Store from '@/store/quiz2-store'; // Import useQuestion2Store
import { useRouter } from 'next/navigation';
import { HiCheckCircle } from 'react-icons/hi';
import SectionGuard from '@/components/form/sectionGuard';

export default function SectionHome() {
  const { isQuestionPlayable } = useCountdownStore();
  const { hasCompletedSection1 } = useQuestionStore();
  const { hasCompletedSection2, isSection2Locked } = useQuestion2Store();
  const router = useRouter();

  SectionGuard({ section: 1 });
  SectionGuard({ section: 2 });

  // Determine if Section 1 and Section 2 should be disabled
  const isQuiz1Disabled = !isQuestionPlayable(1) || hasCompletedSection1;
  const isQuiz2Disabled = isSection2Locked || !hasCompletedSection1 || !isQuestionPlayable(2) || hasCompletedSection2;

  const scoreQuiz1 = 85;
  const scoreQuiz2 = 90;

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='space-y-6 text-center'>
        <section>
          <button
            disabled={isQuiz1Disabled}
            onClick={() => router.push('/sesi/quiz1')}
            className={`w-full py-3 px-5 rounded-lg font-semibold text-white transition-all duration-300 ${
              !isQuiz1Disabled ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl' : 'bg-gray-400 cursor-not-allowed flex items-center justify-between gap-2'
            }`}
          >
            <span>Quiz 1 TES UJIAN TERTULIS CAT</span>
            <span className='bg-white text-blue-600 font-bold py-1 px-3 rounded-full'>{scoreQuiz1 + ' / 100'}</span>
            {isQuiz1Disabled && <HiCheckCircle className='text-green-500 ml-2' />}
          </button>
        </section>
        <section>
          <button
            disabled={isQuiz2Disabled}
            onClick={() => router.push('/sesi/quiz2')}
            className={`w-full py-3 px-5 rounded-lg font-semibold text-white transition-all duration-300 ${
              !isQuiz2Disabled ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl' : 'bg-gray-400 cursor-not-allowed flex items-center justify-between gap-2'
            }`}
          >
            <span>Quiz 2 TES UJIAN KOMPUTER</span>
            <span className='bg-white text-blue-600 font-bold py-1 px-3 rounded-full'>{scoreQuiz2 + ' / 100'}</span>
            {isQuiz2Disabled && <HiCheckCircle className='text-green-500 ml-2' />}
          </button>
        </section>
        <section>
          <button onClick={() => router.push('/sesi/infoquiz3')} className={'w-full py-3 px-5 rounded-lg font-semibold text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'}>
            <span>Quiz 3 WAWANCARA</span>
          </button>
        </section>
      </div>
    </div>
  );
}
