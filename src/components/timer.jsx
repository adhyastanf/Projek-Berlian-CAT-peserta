'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useCountdownStoreuiz1 from '@/store/countdown-quiz1';

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(0);
  const { getRemainingTime, startTimer } = useCountdownStoreuiz1();
  const router = useRouter();

  useEffect(() => {
    // Memulai timer pada komponen mount
    startTimer();

    const interval = setInterval(() => {
      const time = getRemainingTime();
      setRemainingTime(time);
      if (time <= 0) {
        clearInterval(interval); // Hentikan interval jika waktu habis
        router.push('/'); // Navigasi ke halaman home
      }
    }, 1000); // Update setiap detik

    return () => clearInterval(interval); // Hentikan interval saat komponen unmount
  }, [getRemainingTime, startTimer, router]);

  const getCountdownValues = (time) => {
    if (time === null) return { minutes: 0, seconds: 0 };
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return { minutes, seconds };
  };

  const { minutes, seconds } = getCountdownValues(remainingTime);

  return (
    <div className="countdown font-mono text-2xl">
      <span style={{ "--value": minutes }}>{minutes.toString().padStart(2, '0')}</span>:
      <span style={{ "--value": seconds }}>{seconds.toString().padStart(2, '0')}</span>
    </div>
  );
};

export default Timer;