import useAuth from '@/store/auth-store';
import useCountdownStore from '@/store/countdown-quiz1';
import useQuestionStore from '@/store/quiz-store';
import useQuestion2Store from '@/store/quiz2-store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Timer = ({ section }) => {
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState(0);
  const { fetchRemainingTime, getRemainingTime } = useCountdownStore();
  const { onCompleteQuestions } = useQuestionStore();
  const { onCompleteQuestions:onCompleteQuestions2 } = useQuestion2Store();
  const { noUjian, kodeDesa } = useAuth();

  useEffect(() => {
    if (section !== 1 && section !== 2) {
      console.error('Invalid section:', section);
      return;
    }

    const initializeTimer = async () => {
      await fetchRemainingTime(section); // Fetch remaining time from API
      const time = getRemainingTime(section);
      setRemainingTime(time);
    };

    initializeTimer();

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1000); // Decrease by 1 second (1000 ms) every interval

      if (remainingTime <= 0) {
        clearInterval(interval); // Clear the interval to stop further execution

        // Complete the questions for Section 1
        if (section === 1) {
          onCompleteQuestions(noUjian, kodeDesa);
        }
        router.push('/sesi'); // Redirect to /sesi if time runs out
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [fetchRemainingTime, getRemainingTime, section, onCompleteQuestions, noUjian, kodeDesa, router, remainingTime]);

  const getCountdownValues = (time) => {
    if (time === null) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getCountdownValues(remainingTime);

  return (
    <div className='countdown font-mono text-2xl'>
      <span style={{ '--value': days }}>{days.toString().padStart(2, '0')}</span>:
      <span style={{ '--value': hours }}>{hours.toString().padStart(2, '0')}</span>:
      <span style={{ '--value': minutes }}>{minutes.toString().padStart(2, '0')}</span>:
      <span style={{ '--value': seconds }}>{seconds.toString().padStart(2, '0')}</span>
    </div>
  );
};

export default Timer;
