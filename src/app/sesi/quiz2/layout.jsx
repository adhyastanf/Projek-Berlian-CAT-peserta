import RightBar from '@/components/form/RightBar2';

const LayoutQuiz2 = ({ children }) => {
  return (
    <div className='flex flex-col lg:flex-row justify-between px-4 lg:px-20'>
      <div className='flex-1 w-full lg:w-auto'>
      {children}
      </div>
      <div className='w-full lg:w-[250px] mt-4 lg:mt-0'>
        <RightBar />
      </div>
    </div>
  );
};

export default LayoutQuiz2;
