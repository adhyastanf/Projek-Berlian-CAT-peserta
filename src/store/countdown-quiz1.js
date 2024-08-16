import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCountdownStore = create(
  persist(
    (set, get) => ({
      section1RemainingTime: null,
      section2RemainingTime: null,
      section1StartTime: null,
      section2StartTime: null,

      fetchRemainingTime: async (section) => {
        try {
          const response = await axios.get('http://18.141.142.63:8080/time', { params: { ujian: section } });

          const remainingTimeInSeconds = response.data.remainingTime;
          const nowDate = new Date();
          const utc7Date = new Date(nowDate.getTime() + 7 * 60 * 60 * 1000);
          const now = utc7Date.toISOString();
          if (section === 1) {
            set({
              section1RemainingTime: remainingTimeInSeconds * 1000, // Store remaining time in milliseconds
              section1StartTime: now,
            });
          } else if (section === 2) {
            set({
              section2RemainingTime: remainingTimeInSeconds * 1000, // Store remaining time in milliseconds
              section2StartTime: now,
            });
          }
        } catch (error) {
          console.error('Failed to fetch remaining time:', error);
        }
      },

      getRemainingTime: (section) => {
        const remainingTime = section === 1 ? get().section1RemainingTime : get().section2RemainingTime;
        console.log(remainingTime)
        return remainingTime || null;
      },

      isQuestionPlayable: (section) => {
        const nowDate = new Date();
        const utc7Date = new Date(nowDate.getTime() + 7 * 60 * 60 * 1000);
        const now = utc7Date.getTime()
        const startTime = new Date(get()[`section${section}StartTime`]).getTime();
        const remainingTime = get().getRemainingTime(section);
        const endTime = startTime + remainingTime;

        return now >= startTime && now < endTime;
      },

      decrementRemainingTime: (section) => {
        set((state) => {
          const timeKey = section === 1 ? 'section1RemainingTime' : 'section2RemainingTime';
          return {
            [timeKey]: state[timeKey] - 1000, // Decrease the remaining time by 1 second
          };
        });
      },

      resetTimer: (section) =>
        set({
          [`section${section}RemainingTime`]: null,
          [`section${section}StartTime`]: null,
        }),
    }),
    {
      name: 'countdown', // Name for persist middleware storage
    }
  )
);

export default useCountdownStore;
