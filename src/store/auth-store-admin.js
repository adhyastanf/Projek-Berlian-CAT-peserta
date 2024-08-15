import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthAdminStore = create(
  persist(
    (set) => ({
      username: '',
      password: '',
      isAuthAdmin: false,

      // Action to set authentication details
      login: (username, password) => set({ username, password, isAuthAdmin: true }),

      // Action to clear authentication details
      logout: () => set({ username: '', password: '', isAuthAdmin: false }),
    }),
    {
      name: 'auth-admin-storage', // Name of the storage (localStorage key)
    //   getStorage: () => localStorage, // Use localStorage to persist the state
    }
  )
);

export default useAuthAdminStore;
