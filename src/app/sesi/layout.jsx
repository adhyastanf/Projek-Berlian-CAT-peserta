import SectionGuard from '@/components/form/sectionGuard';

export default function LayoutSesi({ children }) {
  return (
    <>
      {/* <SectionGuard section={1} />
      <SectionGuard section={2} /> */}
      <div className='h-full bg-gray-100'>
        <div className='text-center py-8'>
          <h1 className='text-2xl font-bold'>Selamat Datang, Adhyasta Naufal F</h1>
          <h2 className='text-xl text-gray-600'>No. Ujian: 001</h2>
        </div>
        {children}
      </div>
    </>
  );
}
