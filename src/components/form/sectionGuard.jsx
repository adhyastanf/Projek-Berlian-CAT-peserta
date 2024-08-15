'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useCountdownStore from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';
import useQuestion2Store from '@/store/quiz2-store';

const SectionGuard = ({ section }) => {
  const router = useRouter();
  const { getRemainingTime, isQuestionPlayable } = useCountdownStore();
  const { hasCompletedSection1 } = useQuestionStore();
  const { hasCompletedSection2, isSection2Locked } = useQuestion2Store();
  const [isStateReady, setIsStateReady] = useState(false);

  useEffect(() => {
    // Check if all required states are available
    if (
      typeof getRemainingTime(section) !== 'undefined' &&
      typeof isQuestionPlayable(section) !== 'undefined' &&
      typeof hasCompletedSection1 !== 'undefined' &&
      typeof hasCompletedSection2 !== 'undefined' &&
      typeof isSection2Locked !== 'undefined'
    ) {
      setIsStateReady(true);
    }
  }, [getRemainingTime, isQuestionPlayable, hasCompletedSection1, hasCompletedSection2, isSection2Locked, section]);

  useEffect(() => {
    if (!isStateReady) return; // Wait until the state is ready

    const remainingTime = getRemainingTime(section);
    const isPlayable = isQuestionPlayable(section);
    const isSection1Completed = hasCompletedSection1;
    const isSection2Completed = hasCompletedSection2;
    const isSection2Locked = useQuestion2Store.getState().isSection2Locked;

    // Handle routing based on the latest state values
    if (section === 1) {
      if (!isPlayable || remainingTime <= 0 || isSection1Completed) {
        router.push('/sesi');
      }
    } else if (section === 2) {
      if (!isSection1Completed || !isPlayable || remainingTime <= 0 || isSection2Locked || isSection2Completed) {
        router.push('/sesi');
      }
    }
  }, [isStateReady, section, getRemainingTime, isQuestionPlayable, hasCompletedSection1, hasCompletedSection2, isSection2Locked, router]);

  return null; // This component is only for route guarding
};

export default SectionGuard;
