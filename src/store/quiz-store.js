import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useQuestion2Store from './quiz2-store'; // Import useQuestion2Store

const useQuestionStore = create(
  persist(
    (set, get) => ({
      quizzes: [],
      questions: [],
      selectedQuizz: null,
      currentQuestion: 0,
      hasCompletedSection1: false,
      score: 0,

      selectQuizz: (quizz) => {
        set({ questions: quizz.soal });
      },
      fetchQuizzes: async () => {
        const { hasCompletedSection1 } = get();

        if (hasCompletedSection1) {
          return; // Do not fetch if quiz is completed
        }
        try {
          const res = await fetch(`http://localhost:3000/data.json`);
          const json = await res.json();
          const quizzes = json.soal;
          set({ quizzes, questions: quizzes, hasCompletedSection1: false });
        } catch (error) {
          console.error(error);
        }
      },

      selectAnswer: (questionId, selectedAnswer) => {
        const { questions } = get();
        const newQuestions = [...questions];
        const questionIndex = newQuestions.findIndex((q) => q._id === questionId);
        const questionInfo = newQuestions[questionIndex];
        const isAnswered = questionInfo?.isAnswered || false;
        const isCorrectUserAnswer = questionInfo?.kunciJawaban === selectedAnswer._id;

        newQuestions[questionIndex] = {
          ...questionInfo,
          isCorrectUserAnswer,
          userSelectedAnswer: selectedAnswer,
          isAnswered,
        };
        set({ questions: newQuestions }, false);
      },

      onCompleteQuestions: () => {
        set({ hasCompletedSection1: true, currentQuestion: 0, score: 100 });
        useQuestion2Store.getState().unlockSection2(); // Unlock Section 2 when Section 1 is completed
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

      reset: () => {
        set({
          currentQuestion: 0,
          questions: [],
        });
      },
    }),
    {
      name: 'quizz',
    }
  )
);

export default useQuestionStore;
