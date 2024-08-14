import BioPeserta from '@/components/form/bioPerserta';
import PageLoader from '@/components/pageLoader';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function LayoutSesi({ children }) {
  return (
    <ProtectedRoute>
      <PageLoader>
        {/* <AuthSync /> */}
        {/* <Image src={Hero} width="100%" height="100%" alt="hero" className='absolute'/> */}
        <div className='pb-20 relative'>
          <BioPeserta />
          {children}
        </div>
      </PageLoader>
    </ProtectedRoute>
  );
}
