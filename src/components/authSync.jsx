'use client';

import { useEffect } from 'react';
import useAuth from '@/store/auth-store';

const AuthSync = () => {
  const { login, logout } = useAuth();

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'auth-store') {
        try {
          const newAuthData = JSON.parse(event.newValue);
          if (newAuthData?.state?.isAuth) {
            login(newAuthData.state); // Sinkronisasi state jika pengguna masih login
          } else {
            logout(); // Logout jika state menunjukkan pengguna tidak login
          }
        } catch (error) {
          console.error('Error parsing auth-store data:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [login, logout]);

  return null;
};

export default AuthSync;
