import { fetchGetQuiz2, fetchGetStatus, fetchUpdateStatus } from '@/helpers/service';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useQuestion2Store = create(
  persist(
    (set, get) => ({
      quizzes: [],
      questions: [],
      currentQuestion: 0,
      hasCompletedSection2: false,
      isSection2Locked: true, 
      isLoading: false,
      isQuiz2Finished: false,
      isQuiz2Restricted: true,

      fetchQuizzes: async (kodeDesa) => {
        const { hasCompletedSection2 } = get();

        if (hasCompletedSection2) {
          return;
        }
        try {
          const params = kodeDesa
          const res = await fetchGetQuiz2(params)
          const quizzes = res.data.data

          set({
            quizzes:quizzes || [],
            questions: quizzes || [],
          });
        } catch (error) {
          console.error(error);
        }
      },

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

          const body = {
            quiz: 'quiz2',
            noUjian,
            kodeDesa,
            statusUpdate: {
              onProgress: false,
              isFinished: true,
              isRestricted: true,
            },
          };

          const statusRes = await fetchUpdateStatus(body)

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

      reset: () => {
        set({
          currentQuestion: 0,
          hasCompletedSection2: false,
          isSection2Locked: true, 
          isQuiz2Finished: false,
          isQuiz2Restricted: true,
        });
      },

      unlockSection2: async (noUjian, kodeDesa) => {
        const body = {
          quiz: 'quiz2',
          noUjian,
          kodeDesa,
          statusUpdate: {
            onProgress: true,
            isFinished: false,
            isRestricted: false,
          },
        }

        const statusUpdate = await fetchUpdateStatus(body)

        set({
          isSection2Locked: statusUpdate?.data?.status?.quiz2?.isRestricted, // Unlock Section 2
          isQuiz2Restricted: statusUpdate?.data?.status?.quiz2?.isRestricted, // Ensure that the restricted state is false
        });
      },

      fetchStatusQuiz2: async (noUjian, kodeDesa) => {
        try {
          const params = {
            noUjian,
            kodeDesa,
          };

          const statusRes = await fetchGetStatus(params)

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
