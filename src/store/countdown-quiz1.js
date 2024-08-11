import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Definisikan state dan fungsi-fungsi yang akan digunakan dalam store
const useCountdownStoreuiz1 = create(
  persist(
    (set, get) => ({
      timerEnd: null,
      startTimer: () => {
        const now = new Date();
        const startTime = new Date();
        startTime.setHours(12, 20, 0, 0); // Set waktu mulai ke jam 1:30 malam

        const endTime = new Date();
        endTime.setHours(15, 50, 0, 0); // Set waktu berakhir ke jam 1:40 malam

        if (now < startTime) {
          // Jika waktu saat ini sebelum jam 1:30 malam, jangan mulai timer
          set({ timerEnd: null });
        } else if (now >= startTime && now < endTime) {
          // Jika waktu sekarang sudah lewat jam 1:30 malam dan sebelum jam 1:40 malam
          set({ timerEnd: endTime.toISOString() });
        } else {
          // Jika sudah lewat jam 1:40 malam, timerEnd sudah diset di sebelumnya
          set({ timerEnd: null });
        }
      },
      getRemainingTime: () => {
        const { timerEnd } = get();
        if (!timerEnd) return null;
        const now = new Date();
        const end = new Date(timerEnd);
        const remainingTime = end - now; // Selisih waktu dalam milidetik
        return remainingTime > 0 ? remainingTime : 0; // Kembalikan waktu sisa atau 0
      },
      isQuestionPlayable: () => {
        const now = new Date();
        const startTime = new Date();
        startTime.setHours(12, 20, 0, 0); // Set waktu mulai ke jam 1:30 malam

        const endTime = new Date();
        endTime.setHours(15, 50, 0, 0); // Set waktu berakhir ke jam 1:40 malam

        return now >= startTime && now < endTime;
      },
      resetTimer: () => set({ timerEnd: null }),
    }),
    {
      name: 'countdown2', // Nama storage untuk persist middleware
    }
  )
);

export default useCountdownStoreuiz1;
