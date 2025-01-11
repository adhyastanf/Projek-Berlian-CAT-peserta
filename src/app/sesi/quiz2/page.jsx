'use client';

import Game2 from '@/components/Game/game2';
import SectionGuard from '@/components/Protected/SectionGuard';
import useAuth from '@/store/auth-store';
import useQuestion2Store from '@/store/quiz2-store';
import { useEffect } from 'react';

export default function Quiz2Page() {
  const { fetchQuizzes } = useQuestion2Store();
  const { noUjian, kodeDesa } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (noUjian && kodeDesa) {
        await fetchQuizzes(kodeDesa);
      }
    };

    fetchData();
  }, [noUjian, kodeDesa, fetchQuizzes]);

  // Apply route guard for Section 1
  SectionGuard({ section: 2 });

  return (
    <div>
      <Game2 />
    </div>
  );
}
