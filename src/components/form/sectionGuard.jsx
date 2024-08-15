'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useCountdownStore from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';
import useQuestion2Store from '@/store/quiz2-store';
import useAuth from '@/store/auth-store';

const SectionGuard = ({ section }) => {
  const router = useRouter();
  
  // State management for Quiz 1
  const { getRemainingTime, isQuestionPlayable } = useCountdownStore();
  const { hasCompletedSection1, isQuiz1Finished, isQuiz1Restricted, fetchStatusQuiz } = useQuestionStore();
  
  // State management for Quiz 2
  const { hasCompletedSection2, isQuiz2Finished, isQuiz2Restricted, isSection2Locked, fetchStatusQuiz2 } = useQuestion2Store();

  const { noUjian, kodeDesa } = useAuth();
  
  const [isStateReady, setIsStateReady] = useState(false);

  useEffect(() => {
    const loadStatus = async () => {
      if (section === 1) {
        await fetchStatusQuiz(noUjian, kodeDesa);
      } else if (section === 2) {
        await fetchStatusQuiz2(noUjian, kodeDesa);
      }
      setIsStateReady(true);
    };

    loadStatus();
  }, [section, noUjian, kodeDesa, fetchStatusQuiz, fetchStatusQuiz2]);

  useEffect(() => {
    if (!isStateReady) return; // Wait until the state is ready

    const remainingTime = getRemainingTime(section);
    const isPlayable = isQuestionPlayable(section);

    // Handle routing based on the latest state values
    if (section === 1) {
      if (!isPlayable || remainingTime <= 0 || isQuiz1Finished || isQuiz1Restricted) {
        router.push('/sesi');
      }
    } else if (section === 2) {
      if (!hasCompletedSection1 || !isPlayable || remainingTime <= 0 || isSection2Locked || isQuiz2Finished || isQuiz2Restricted) {
        router.push('/sesi');
      }
    }
  }, [isStateReady, section, getRemainingTime, isQuestionPlayable, hasCompletedSection1, hasCompletedSection2, isSection2Locked, isQuiz1Finished, isQuiz1Restricted, isQuiz2Finished, isQuiz2Restricted, router]);

  return null; // This component is only for route guarding
};

export default SectionGuard;
