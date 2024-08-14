'use client';

import { useEffect, useState } from 'react';
import useAuth from '@/store/auth-store';

export default function BioPeserta() {
  const { namaLengkap, noUjian } = useAuth();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Zustand persists data in localStorage, so ensure it has been loaded before using it
    const checkHydration = async () => {
      setIsHydrated(true);
    };
    checkHydration();
  }, []);

  if (!isHydrated) {
    return null; // Or a loading spinner if you prefer
  }

  if (!namaLengkap || !noUjian) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className='text-center py-8'>
      <h1 className='text-2xl font-bold text-black'>{`Selamat Datang, ${namaLengkap}`}</h1>
      <h2 className='text-xl text-black'>{`No. Ujian: ${noUjian}`}</h2>
    </div>
  );
}
