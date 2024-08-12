'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useCountdownStore from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';
import useQuestion2Store from '@/store/quiz2-store';

const Timer = ({ section }) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const { getRemainingTime, isQuestionPlayable, startTimer } = useCountdownStore();
  const { hasCompletedSection1 } = useQuestionStore();
  const { hasCompletedSection2, isSection2Locked } = useQuestion2Store();
  const router = useRouter();

  useEffect(() => {
    startTimer(); // Initialize timer settings

    const interval = setInterval(() => {
      const time = getRemainingTime(section);
      setRemainingTime(time);

      if (time <= 0) {
        clearInterval(interval);
        router.push('/sesi'); // Redirect to home if time expires
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [getRemainingTime, isQuestionPlayable, router, section, startTimer]);

  useEffect(() => {
    if (section === 1 && hasCompletedSection1) {
      router.push('/sesi'); // Redirect if Section 1 is completed
    }
    if (section === 2 && (hasCompletedSection2 || isSection2Locked)) {
      router.push('/sesi'); // Redirect if Section 2 is completed or locked
    }
  }, [hasCompletedSection1, hasCompletedSection2, isSection2Locked, router, section]);

  const getCountdownValues = (time) => {
    if (time === null) return { minutes: 0, seconds: 0 };
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return { minutes, seconds };
  };

  const { minutes, seconds } = getCountdownValues(remainingTime);

  return (
    <div className='countdown font-mono text-2xl'>
      <span style={{ '--value': minutes }}>{minutes.toString().padStart(2, '0')}</span>:
      <span style={{ '--value': seconds }}>{seconds.toString().padStart(2, '0')}</span>
    </div>
  );
};

export default Timer;
