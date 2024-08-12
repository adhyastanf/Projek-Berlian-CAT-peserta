import Image from 'next/image';
import { cn } from '@/lib/utils';

const Answer = ({ answer, selectedAns, handleSelectAnswer, index, answerLabels }) => {
  const isSelected = selectedAns?._id === answer?._id;

  return (
    <li className='w-full'>
      <button
        onClick={() => handleSelectAnswer(answer)}
        className={cn(
          isSelected && 'ring ring-offset-2 ring-purple bg-black text-white',
          'w-full flex items-center gap-x-4 bg-white dark:bg-gray-800 py-4 px-5 rounded-xl shadow-lg hover:ring-1 hover:ring-purple transition-all font-semibold text-sm text-dark-blue dark:text-white'
        )}
      >
        <span className={cn(isSelected ? 'bg-white text-black' : 'bg-gray-200 dark:bg-gray-700 group-hover:bg-purple group-hover:text-black', 'text-lg rounded-lg py-2 px-4')}>{answerLabels[index]}</span>
        <span className='xl:text-lg'>{answer.optionText}</span>
      </button>
    </li>
  );
};

export default Answer;
