'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useCountdownStore from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';
import useQuestion2Store from '@/store/quiz2-store';

const SectionGuard = ({ section }) => {
  const router = useRouter();
  const { getRemainingTime, isQuestionPlayable } = useCountdownStore();
  const { hasCompletedSection1 } = useQuestionStore();
  const { hasCompletedSection2, isSection2Locked } = useQuestion2Store();

  useEffect(() => {
    const remainingTime = getRemainingTime(section);
    const isPlayable = isQuestionPlayable(section);
    const isSection1Completed = hasCompletedSection1;
    const isSection2Completed = hasCompletedSection2;
    const isSection2Locked = useQuestion2Store.getState().isSection2Locked;

    if (section === 1) {
      // Section 1 should be accessible only during its time window
      if (!isPlayable || !remainingTime) {
        router.push('/sesi');
      }
    } else if (section === 2) {
      // Section 2 should be accessible only after Section 1 is completed and during its time window
      if (!isSection1Completed || !isPlayable || isSection2Completed || isSection2Locked) {
        router.push('/sesi');
      }
    }
  }, [section, getRemainingTime, isQuestionPlayable, hasCompletedSection1, hasCompletedSection2, isSection2Locked, router]);

  return null; // This component is only for route guarding
};

export default SectionGuard;
