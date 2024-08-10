import Image from 'next/image';
import { cn } from '@/lib/utils';

const Answer = ({ answer, selectedAns, isCorrectUserAnswer, handleSelectAnswer, index, answerLabels }) => {
  const isSelected = selectedAns?._id === answer?._id;
  const isCorrect = isCorrectUserAnswer === true;
  const isIncorrect = isCorrectUserAnswer === false;
  console.log(selectedAns);
  console.log(isCorrectUserAnswer);
  console.log(answer);

  console.log(isCorrectUserAnswer && selectedAns._id === answer._id);
  console.log(!isCorrectUserAnswer && selectedAns._id !== answer._id);

  return (
    <li>
      <button
        onClick={() => handleSelectAnswer(answer)}
        className={cn(
          isSelected && 'ring-purple ring-1',
          isSelected && isCorrect && 'ring-green',
          isSelected && isIncorrect && 'ring-red',
          'w-full flex items-center gap-x-4 group bg-[#fff] dark:bg-slate py-4 px-5 rounded-xl shadow-lg hover:ring-1 hover:ring-purple transition-all font-semibold text-sm text-dark-blue dark:text-white text-center'
        )}
      >
        <span
          className={cn(
            isSelected ? 'bg-purple text-blue' : 'bg-white dark:text-dark-blue group-hover:text-purple group-hover:bg-[#F6E7FF] transition-all',
            'text-lg rounded-lg py-2 px-4',
            isSelected && isIncorrect && 'bg-red',
            isSelected && isCorrect && 'bg-green'
          )}
        >
          {answerLabels[index]}
        </span>
        <span className='xl:text-lg'>{answer.optionText}</span>
        {isSelected && isCorrect && <span className='text-green-500 ml-auto'>benar</span>}
        {isSelected && isIncorrect && <span className='text-red-500 ml-auto'>salah</span>}
      </button>
    </li>
  );
};

export default Answer;

