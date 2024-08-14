import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Soal1 from '../../public/soal1.png';
import Soal2 from '../../public/soal2.png';

const useQuestion2Store = create(
  persist(
    (set, get) => ({
      questions: [
        {
          _id: '1',
          soalText: Soal1,
          questionType: 'file-upload',
          uploadedFileName: null, // Store the uploaded file name
          linkFile: "https://drive.google.com/uc?export=download&id=1ztG0NKdyd6sbHHIWouSp7XB9Iip5h8zb"
        },
        {
          _id: '2',
          soalText: Soal2,
          questionType: 'file-upload',
          uploadedFileName: null,
        },
      ],
      currentQuestion: 0,
      hasCompletedSection2: false,
      isSection2Locked: true, // Initial state for Section 2 lock
      isLoading: false, // Loading state

      goNextQuestion: () => {
        const { currentQuestion, questions } = get();
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          set({ currentQuestion: nextQuestion });
        }
      },

      goPreviousQuestion: () => {
        const { currentQuestion } = get();
        const previousQuestion = currentQuestion - 1;
        if (previousQuestion >= 0) {
          set({ currentQuestion: previousQuestion });
        }
      },

      goToQuestion: (index) => {
        set({ currentQuestion: index });
      },

      setLoading: (loading) => {
        set({ isLoading: loading });
      },

      saveUploadedFileName: (fileName) => {
        const { currentQuestion, questions } = get();
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestion].uploadedFileName = fileName;
        set({ questions: updatedQuestions });
      },

      onCompleteQuestions: () => {
        set({ hasCompletedSection2: true, currentQuestion: 0 });
      },

      reset: () => {
        set({
          currentQuestion: 0,
          hasCompletedSection2: false,
          isSection2Locked: true, // Reset lock state
        });
      },

      unlockSection2: () => {
        set({ isSection2Locked: false });
      },
    }),
    {
      name: 'quiz2-store',
    }
  )
);

export default useQuestion2Store;
