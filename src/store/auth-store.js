import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuth = create(
  persist(
    (set) => ({
      noUjian: null,
      namaLengkap: null,
      gender: null,
      pendidikanTerakhir: null,
      alamat: null,
      kodeDesa: null,
      isAuth: false,

      login: (data) => {
        set({
          noUjian: data.noUjian,
          namaLengkap: data.namaLengkap,
          gender: data.gender,
          pendidikanTerakhir: data.pendidikanTerakhir,
          alamat: data.alamat,
          kodeDesa: data.kodeDesa,
          isAuth: true,
        });
      },

      logout: () => {
        set({
          noUjian: null,
          namaLengkap: null,
          gender: null,
          pendidikanTerakhir: null,
          alamat: null,
          kodeDesa: null,
          isAuth: false,
        });
      },
    }),
    {
      name: 'auth-store',
    //   storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    }
  )
);

export default useAuth;
