import RightBar from '@/components/form/RightBar';

const LayoutQuiz2 = ({ children }) => {
  return (
    <div className='flex justify-between px-20'>
      {children}
      <div>
        <RightBar />
      </div>
    </div>
  );
};

export default LayoutQuiz2;
