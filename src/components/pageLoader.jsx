'use client';

import { useState, useEffect } from 'react';

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan proses pemuatan atau state initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Gantilah durasi sesuai kebutuhan Anda

    return () => clearTimeout(timer);
  }, []);

  // Tampilkan spinner atau animasi loading saat halaman sedang dimuat
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  // Render konten halaman jika sudah selesai loading
  return children;
};

export default PageLoader;
