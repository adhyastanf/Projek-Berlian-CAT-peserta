import AdminProtectedRoute from '@/components/adminProtectedRoute';
import PageLoader from '@/components/pageLoader';

export default function LayoutAdmin({ children }) {
  return (
    <AdminProtectedRoute>
      <PageLoader>{children}</PageLoader>
    </AdminProtectedRoute>
  );
}
