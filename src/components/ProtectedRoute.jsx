'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useAuth from '@/store/auth-store';

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuth();

  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true); // Set the rehydration status once the component is mounted
  }, []);

  useEffect(() => {
    if (isHydrated && !isAuth) {
      router.replace('/'); // Redirect to home if not authenticated after hydration
    }
  }, [isAuth, isHydrated, router]);

  if (!isHydrated) {
    // Render null or a loader while hydration is taking place
    return null;
  }

  // Only render children if authenticated and hydration is complete
  return isAuth ? children : null;
};

export default ProtectedRoute;
