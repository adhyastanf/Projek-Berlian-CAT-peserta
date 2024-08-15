import BioPeserta from '@/components/form/bioPerserta';
import PageLoader from '@/components/pageLoader';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function LayoutSesi({ children }) {
  return (
    <ProtectedRoute>
      <PageLoader>
        <div className='pb-20 relative'>
          <BioPeserta />
          {children}
        </div>
      </PageLoader>
    </ProtectedRoute>
  );
}
