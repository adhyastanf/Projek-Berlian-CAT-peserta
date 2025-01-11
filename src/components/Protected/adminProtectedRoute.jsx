'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useAuthAdminStore from '@/store/auth-store-admin';

const AdminProtectedRoute = ({ children }) => {
  const { isAuthAdmin } = useAuthAdminStore();
  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const isAdminLoginPath = router.pathname === '/admin/login';
      const isRootPath = router.pathname === '/';

      if (!isAuthAdmin && !isAdminLoginPath && !isRootPath) {
        router.replace('/admin/login');
      }
    }
  }, [isAuthAdmin, isHydrated, router]);

  if (!isHydrated) {
    return null;
  }

  return children;
};

export default AdminProtectedRoute;
