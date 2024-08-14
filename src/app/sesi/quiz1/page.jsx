'use client';
import Game from '@/components/form/game';
import useQuestionStore from '@/store/quiz-store';
import { useEffect } from 'react';
import SectionGuard from '@/components/form/sectionGuard';
import useAuth from '@/store/auth-store';

export default function Quiz1Page() {
  const { fetchQuizzes, hasCompleteAll, reset } = useQuestionStore();
  const { noUjian, kodeDesa } = useAuth();
  console.log(noUjian);
  console.log(kodeDesa);

  useEffect(() => {
    const fetchData = async () => {
      // if (noUjian && kodeDesa) {
        await fetchQuizzes(noUjian, kodeDesa);
      // }
    };

    fetchData();
  }, [noUjian, kodeDesa, fetchQuizzes]);

  // Apply route guard for Section 1
  SectionGuard({ section: 1 });

  return (
    <div>
      <Game />
    </div>
  );
}
