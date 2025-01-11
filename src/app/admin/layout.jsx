import AdminProtectedRoute from '@/components/Protected/adminProtectedRoute';
import PageLoader from '@/components/Loader/pageLoader';

export default function LayoutAdmin({ children }) {
  return (
    <AdminProtectedRoute>
      <PageLoader>{children}</PageLoader>
    </AdminProtectedRoute>
  );
}
