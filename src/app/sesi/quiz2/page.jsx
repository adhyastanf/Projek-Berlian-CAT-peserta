'use client';
import Game2 from '@/components/form/game2';
// import MaxWidthWrapper from "@/components/atoms/max-width-wrapper";
// import Score from "@/components/atoms/score";
// import Subjects from "@/components/atoms/subjects";
import useQuestionStore from '@/store/quiz-store';
import { useEffect } from 'react';
// import { MotionDiv } from "@/components/animated/motion-div";
import { cn } from '@/lib/utils';
import SectionGuard from '@/components/form/sectionGuard';
import useQuestion2Store from '@/store/quiz2-store';

export default function Quiz2Page() {
  const { hasCompletedSection2, isSection2Locked} = useQuestion2Store();

  // useEffect(() => {
  //   fetchQuizzes();
  // }, [fetchQuizzes]);

  // Apply route guard for Section 1
  SectionGuard({ section: 2 });
  console.log(hasCompletedSection2, isSection2Locked)

  return (
    <div>
      <Game2 />
    </div>
  );
}
