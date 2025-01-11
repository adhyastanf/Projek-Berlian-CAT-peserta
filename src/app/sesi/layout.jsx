import BioPeserta from '@/components/FormPeserta/DetailPeserta';
import PageLoader from '@/components/Loader/pageLoader';
import ProtectedRoute from '@/components/Protected/ProtectedRoute';

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
