'use client';
import { useState, useEffect } from 'react';
import useCountdownStore from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';
import useQuestion2Store from '@/store/quiz2-store'; // Import useQuestion2Store
import { useRouter } from 'next/navigation';
import { HiCheckCircle } from 'react-icons/hi';
import useAuth from '@/store/auth-store';
import Image from 'next/image';
import Hero from '../../public/hero.jpg'

export default function SectionHome() {
  const [loading, setLoading] = useState(true); // State untuk loading
  const { isQuestionPlayable } = useCountdownStore();
  const { hasCompletedSection1, score } = useQuestionStore();
  const { hasCompletedSection2, isSection2Locked } = useQuestion2Store();
  const router = useRouter();
  const { isAuth } = useAuth();

  // useEffect(() => {
  //   // Simulasi loading hingga state siap
  //   const timer = setTimeout(() => {
  //     setLoading(false); // Set loading menjadi false setelah waktu tertentu
  //   }, 100); // Anda bisa menyesuaikan durasi ini

  //   return () => clearTimeout(timer);
  // }, []);

  // Tentukan apakah section 1 dan 2 seharusnya dinonaktifkan
  const isQuiz1Disabled = !isQuestionPlayable(1) || hasCompletedSection1;
  const isQuiz2Disabled = isSection2Locked || !hasCompletedSection1 || !isQuestionPlayable(2) || hasCompletedSection2;

  console.log(isQuiz2Disabled);

  // if (loading) {
  //   return (
  //     <span className="loading loading-spinner loading-lg"></span>
  //   );
  // }

  return (
    <div>
      <Image src={Hero} width="100%" height="100%" alt="hero" className='absolute'/>
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
              {/* {isQuiz1Disabled && <HiCheckCircle className='text-green-500 ml-2' />} */}
            </button>
          </section>
          <section>
            <button
              disabled={isQuiz2Disabled}
              onClick={() => router.push('/sesi/quiz2')}
              className={`w-full py-5 px-10 rounded-lg font-semibold text-white transition-all duration-300 ${!isQuiz2Disabled ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              <span>TES UJIAN KOMPUTER</span>
              {/* {isQuiz2Disabled && <HiCheckCircle className='text-green-500 ml-2' />} */}
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
