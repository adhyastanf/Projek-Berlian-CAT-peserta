const CurrentQuestion = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2 className="text-dark-blue dark:text-white xs:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
        {data?.soalText}
      </h2>
    </div>
  );
};

export default CurrentQuestion;
