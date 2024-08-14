import AuthSync from '@/components/authSync';
import PageLoader from '@/components/pageLoader';
import ProtectedRoute from '@/components/ProtectedRoute';
import Image from 'next/image';
import Hero from '../../../public/hero.jpg'

export default function LayoutSesi({ children }) {
  return (
    <ProtectedRoute>
      <PageLoader>
        {/* <AuthSync /> */}
        {/* <Image src={Hero} width="100%" height="100%" className='absolute'/> */}
        <div className='pb-20 relative'>
          <div className='text-center py-8'>
            <h1 className='text-2xl font-bold'>Selamat Datang, Adhyasta Naufal F</h1>
            <h2 className='text-xl text-gray-600'>No. Ujian: 001</h2>
          </div>
          {children}
        </div>
      </PageLoader>
    </ProtectedRoute>
  );
}
