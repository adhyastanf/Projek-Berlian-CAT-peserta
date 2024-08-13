'use client';
import useCountdownStore from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Timer = ({ section }) => {
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState(0);
  const { getRemainingTime, startTimer } = useCountdownStore();
  const { onCompleteQuestions } = useQuestionStore();

  useEffect(() => {
    // Optional: Check if the section is valid before starting the timer
    if (section !== 1 && section !== 2) {
      console.error('Invalid section:', section);
      return;
    }

    startTimer(); // Initialize timer settings

    const interval = setInterval(() => {
      const time = getRemainingTime(section);
      setRemainingTime(time);

      if (time <= 0) {
        clearInterval(interval); // Clear the interval to stop further execution

        // Complete the questions for Section 1
        if (section === 1) {
          onCompleteQuestions();
        }
        router.push('/sesi'); // Redirect to /sesi if time runs out
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [getRemainingTime, section, startTimer, router]);

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
