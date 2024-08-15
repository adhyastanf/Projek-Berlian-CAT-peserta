'use client';
import useQuestion2Store from '@/store/quiz2-store';
import Timer from '../timer';

function RightBar() {
  const { questions, goToQuestion } = useQuestion2Store();

  return (
    <div className='flex flex-col items-center p-4'>
      <Timer section={2} />
      <div className='grid grid-cols-5 gap-2 mt-4 w-full max-w-2xl'>
        {questions.map((question, index) => (
          <div
            key={index}
            onClick={() => goToQuestion(index)}
            className={`flex items-center justify-center w-8 h-8 rounded-md text-xs font-semibold cursor-pointer
            ${question.isAnswered ? 'bg-green-400' : 'bg-zinc-300'} // Change color if answered
              dark:bg-slate-700 text-dark-blue dark:text-white`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightBar;
