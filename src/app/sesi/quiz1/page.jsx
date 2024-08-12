'use client';
import Game from '@/components/form/game';
// import MaxWidthWrapper from "@/components/atoms/max-width-wrapper";
// import Score from "@/components/atoms/score";
// import Subjects from "@/components/atoms/subjects";
import useQuestionStore from '@/store/quiz-store';
import { useEffect } from 'react';
// import { MotionDiv } from "@/components/animated/motion-div";
import { cn } from '@/lib/utils';
import SectionGuard from '@/components/form/sectionGuard';

export default function Quiz1Page() {
  const { fetchQuizzes, hasCompleteAll, reset } = useQuestionStore();

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  // Apply route guard for Section 1
  SectionGuard({ section: 1 });

  return (
    <div>
      <Game />
    </div>
  );
}