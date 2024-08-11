import FormDisplay from '@/components/form/form';

const FormPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen mt-12'>
      <h1 className='text-2xl font-bold'>Isi Biodata Diri Peserta</h1>
      <div className='w-full max-w-md'>
        <FormDisplay />
      </div>
    </div>
  );
};

export default FormPage;
