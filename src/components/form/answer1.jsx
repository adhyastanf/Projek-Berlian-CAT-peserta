import Image from 'next/image';
import { cn } from '@/lib/utils';

const Answer = ({ answer, selectedAns, handleSelectAnswer, index, answerLabels }) => {
  const isSelected = selectedAns === answer?.optionText;

  return (
    <li className='w-full'>
      <button
        onClick={() => handleSelectAnswer(answer)}
        className={cn(
          isSelected && 'ring ring-offset-2 ring-third text-black ',
          'w-full flex items-center gap-x-4 bg-white  py-4 px-5 rounded-xl shadow-lg hover:ring-1 hover:ring-purple transition-all font-semibold text-sm text-dark-blue '
        )}
      >
        <span className={cn(isSelected ? 'bg-third text-white' : 'bg-gray-200  group-hover:bg-purple group-hover:text-black', 'text-lg rounded-lg py-2 px-4')}>{answerLabels[index]}</span>
        <span className='xl:text-lg text-left'>{answer.optionText}</span>
      </button>
    </li>
  );
};

export default Answer;
