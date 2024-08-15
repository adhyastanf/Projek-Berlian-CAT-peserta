'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useAuthAdminStore from '@/store/auth-store-admin';

const AdminProtectedRoute = ({ children }) => {
  const { isAuthAdmin } = useAuthAdminStore(); // Admin's auth state
  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true); // Set the hydration status once the component is mounted
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const isAdminLoginPath = router.pathname === '/admin/login';
      const isRootPath = router.pathname === '/';

      if (!isAuthAdmin && !isAdminLoginPath && !isRootPath) {
        router.replace('/admin/login'); // Redirect to admin login if not authenticated
      }
    }
  }, [isAuthAdmin, isHydrated, router]);

  if (!isHydrated) {
    // Render null or a loader while hydration is taking place
    return null;
  }

  // Only render children if hydration is complete and the user is on an allowed path
  return children;
};

export default AdminProtectedRoute;
