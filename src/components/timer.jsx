'use client';
import useAuth from '@/store/auth-store';
import useCountdownStore from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Timer = ({ section }) => {
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState(0);
  const { getRemainingTime, startTimer } = useCountdownStore();
  const { onCompleteQuestions } = useQuestionStore();
  const {noUjian, kodeDesa} = useAuth();


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
          onCompleteQuestions(noUjian, kodeDesa);
        }
        router.push('/sesi'); // Redirect to /sesi if time runs out
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [getRemainingTime, section, startTimer, router]);

  const getCountdownValues = (time) => {
    if (time === null) return { hours: 0, minutes: 0, seconds: 0 };
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = getCountdownValues(remainingTime);

  return (
    <div className='countdown font-mono text-2xl'>
      <span style={{ '--value': hours }}>{hours.toString().padStart(2, '0')}</span>:
      <span style={{ '--value': minutes }}>{minutes.toString().padStart(2, '0')}</span>:
      <span style={{ '--value': seconds }}>{seconds.toString().padStart(2, '0')}</span>
    </div>
  );
};

export default Timer;
