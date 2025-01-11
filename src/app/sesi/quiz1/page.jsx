'use client';

import useQuestionStore from '@/store/quiz-store';
import { useEffect } from 'react';
import SectionGuard from '@/components/Protected/SectionGuard';
import useAuth from '@/store/auth-store';
import Game from '@/components/Game/game';

export default function Quiz1Page() {
  const { fetchQuizzes } = useQuestionStore();
  const { noUjian, kodeDesa } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (noUjian && kodeDesa) {
        await fetchQuizzes(noUjian, kodeDesa);
      }
    };

    fetchData();
  }, [noUjian, kodeDesa, fetchQuizzes]);

  SectionGuard({ section: 1 });

  return (
    <div>
      <Game />
    </div>
  );
}
