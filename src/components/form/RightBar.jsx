'use client';
import useQuestionStore from '@/store/quiz-store';
import Timer from '../timer';

function RightBar() {
  const { questions, goToQuestion, isQuestionPlayable } = useQuestionStore();

  //   const handleClick = (index) => {
  //     goToQuestion(index);
  //   };

  return (
    <div className='flex flex-col items-center p-4'>
      <div className='text-xl font-semibold mb-4 w-full max-w-xs'>
        <p>Nama Peserta: John Doe</p>
        <p>Nomor Peserta: 001</p>
      </div>
      <Timer />
      <div className='grid grid-cols-4 gap-4 mt-4 w-full max-w-2xl'>
        {questions.map((question, index) => (
          <div
            key={index}
            onClick={() => goToQuestion(index)}
            className={`flex items-center justify-center w-12 h-12 rounded-md text-lg font-semibold cursor-pointer
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
