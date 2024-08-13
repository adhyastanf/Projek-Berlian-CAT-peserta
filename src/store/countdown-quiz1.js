import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCountdownStore = create(
  persist(
    (set, get) => ({
      section1StartTime: null,
      section1EndTime: null,
      section2StartTime: null,
      section2EndTime: null,

      startTimer: () => {
        const now = new Date();

        // Section 1 Start and End Times
        const section1Start = new Date();
        section1Start.setHours(10, 7, 0, 0); // Set start time to 1:20 PM
        const section1End = new Date(section1Start);
        section1End.setHours(19, 48, 0, 0); // Set duration to 30 minutes

        // Section 2 Start and End Times
        const section2Start = new Date(section1End); // Start Section 2 right after Section 1
        section2Start.setHours(10, 7, 0, 0); // 10 minutes break
        const section2End = new Date(section2Start);
        section2End.setHours(19, 50, 0, 0); // Set duration to 45 minutes

        // Set times based on current time
        set({ 
          section1StartTime: now < section1Start ? section1Start.toISOString() : null,
          section1EndTime: now < section1End ? section1End.toISOString() : null,
          section2StartTime: now < section2Start ? section2Start.toISOString() : null,
          section2EndTime: now < section2End ? section2End.toISOString() : null
        });

        console.log('Section 1 Start Time:', section1Start);
        console.log('Section 1 End Time:', section1End);
        console.log('Section 2 Start Time:', section2Start);
        console.log('Section 2 End Time:', section2End);
      },

      getRemainingTime: (section) => {
        const endTime = section === 1 ? get().section1EndTime : get().section2EndTime;
        if (!endTime) return null;
        const now = new Date();
        const end = new Date(endTime);
        const remainingTime = end - now; // Difference in milliseconds
        return remainingTime > 0 ? remainingTime : 0; // Return remaining time or 0
      },

      isQuestionPlayable: (section) => {
        const now = new Date();
        const startTime = new Date(get()[`${section === 1 ? 'section1StartTime' : 'section2StartTime'}`]);
        const endTime = new Date(get()[`${section === 1 ? 'section1EndTime' : 'section2EndTime'}`]);

        return now >= startTime && now < endTime;
      },

      resetTimer: (section) => set({ [`section${section}StartTime`]: null, [`section${section}EndTime`]: null }),
    }),
    {
      name: 'countdown', // Name for persist middleware storage
    }
  )
);

export default useCountdownStore;
