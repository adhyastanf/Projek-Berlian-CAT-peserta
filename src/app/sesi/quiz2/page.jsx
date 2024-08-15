'use client';
import Game2 from '@/components/form/game2';
import SectionGuard from '@/components/form/sectionGuard';
import useQuestion2Store from '@/store/quiz2-store';

export default function Quiz2Page() {
  const { hasCompletedSection2, isSection2Locked} = useQuestion2Store();

  // Apply route guard for Section 1
  SectionGuard({ section: 2 });

  return (
    <div>
      <Game2 />
    </div>
  );
}
