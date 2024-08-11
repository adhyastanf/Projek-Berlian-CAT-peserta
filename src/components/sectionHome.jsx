'use client';
import useCountdownStoreuiz1 from '@/store/countdown-quiz1';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SectionHome() {
  const { isQuestionPlayable } = useCountdownStoreuiz1();
  console.log(isQuestionPlayable());
  const router = useRouter();
  return (
    <div >
      <section>
        <button disabled={!isQuestionPlayable()} onClick={() => router.push('/quiz1')}>
          Quiz 1
        </button>
      </section>
      <section>
        <button disabled={!isQuestionPlayable()} onClick={() => router.push('/quiz2')}>
          Quiz 2
        </button>
      </section>
    </div>
  );
}
