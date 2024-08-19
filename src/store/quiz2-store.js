import axios from 'axios';
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
          linkFile:'https://drive.google.com/uc?export=download&id=1ztG0NKdyd6sbHHIWouSp7XB9Iip5h8zb',
          uploadedFileName: null,
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
      isLoading: false,
      isQuiz2Finished: false,
      isQuiz2Restricted: true,

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

      markQuestionAsAnswered: (questionIndex) => {
        const { questions } = get();
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].isAnswered = true;
        set({ questions: updatedQuestions });
      },

      onCompleteQuestions: async (noUjian, kodeDesa) => {
        try {
          set({ currentQuestion: 0 });

          // Update the quiz status on the server
          const statusUpdate = {
            quiz: 'quiz2',
            noUjian,
            kodeDesa,
            statusUpdate: {
              onProgress: false,
              isFinished: true,
              isRestricted: true,
            },
          };

          const statusRes = await axios.put('http://18.141.142.63:8080/status', statusUpdate);

          // Update store with the new status
          set({
            hasCompletedSection2: statusRes?.data?.status?.quiz2?.isFinished,
            isQuiz2Finished: statusRes?.data?.status?.quiz2?.isFinished,
            isQuiz2Restricted: statusRes?.data?.status?.quiz2?.isRestricted,
            isSection2Locked: statusRes?.data?.status?.quiz2?.isRestricted, // Update isSection2Locked accordingly
          });
        } catch (error) {
          console.error('Failed to update quiz2 status:', error);
        }
      },

      reset: () => {
        set({
          currentQuestion: 0,
          hasCompletedSection2: false,
          isSection2Locked: true, // Reset lock state
          isQuiz2Finished: false,
          isQuiz2Restricted: true,
        });
      },

      unlockSection2: async (noUjian, kodeDesa) => {
        const statusUpdate = await axios.put('http://18.141.142.63:8080/status', {
            quiz: 'quiz2',
            noUjian,
            kodeDesa,
            statusUpdate: {
              onProgress: true,
              isFinished: false,
              isRestricted: false,
            },
          });
          console.log(statusUpdate?.data?.status?.quiz2?.isFinished)

        set({
          isSection2Locked: statusUpdate?.data?.status?.quiz2?.isRestricted, // Unlock Section 2
          isQuiz2Restricted: statusUpdate?.data?.status?.quiz2?.isRestricted, // Ensure that the restricted state is false
        });
      },

      fetchStatusQuiz2: async (noUjian, kodeDesa) => {
        try {
          const statusUpdate = {
            noUjian,
            kodeDesa,
          };

          const statusRes = await axios.get('http://18.141.142.63:8080/status', {
            params: statusUpdate,
          });

          set({
            hasCompletedSection2: statusRes?.data?.status?.quiz2?.isFinished,
            isQuiz2Finished: statusRes?.data?.status?.quiz2?.isFinished,
            isQuiz2Restricted: statusRes?.data?.status?.quiz2?.isRestricted,
            isSection2Locked: statusRes?.data?.status?.quiz2?.isRestricted,
          });
        } catch (error) {
          console.error('Failed to update quiz2 status:', error);
        }
      },
    }),
    {
      name: 'quiz2-store',
    }
  )
);

export default useQuestion2Store;
