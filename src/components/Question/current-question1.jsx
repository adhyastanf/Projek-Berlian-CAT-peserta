const CurrentQuestion = ({ data }) => {
  return (
    <div>
      <h2 className='text-dark-blue  xs:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
        <div dangerouslySetInnerHTML={{ __html: data?.soalText }}></div>
      </h2>
    </div>
  );
};

export default CurrentQuestion;
