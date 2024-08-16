'use client';
import { useQuestionStore } from '@/store/quiz-store';
import Image from 'next/image';

const Subjects = ({ data }) => {
  const subjects = data.map((q) => ({ title: q.title, icon: q.icon }));

  const selectQuizz = useQuestionStore((state) => state.selectQuizz);
  const backgroundColors = {
    HTML: '#FFF1E9',
    CSS: '#E0FDEF',
    JavaScript: '#EBF0FF',
    Accessibility: '#F6E7FF',
  };

  return (
    <>
      {subjects.map((subject) => (
        <button
          key={subject.title}
          onClick={() => {
            selectQuizz(data.find((q) => q.title === subject.title));
          }}
          className='flex items-center gap-x-4 bg-[#fff] py-3 px-4 xl:py-5 rounded-2xl shadow-lg ring-1 hover:ring-purple transition-all'
        >
          <div className='p-2 rounded-lg' style={{ backgroundColor: backgroundColors[subject.title] }}>
            <Image src={subject.icon} alt='icon' width={30} height={30} />
          </div>
          <p className=' text-xl font-semibold'>{subject.title}</p>
        </button>
      ))}
    </>
  );
};

export default Subjects;
