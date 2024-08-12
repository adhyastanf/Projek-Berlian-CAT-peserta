import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useQuestion2Store = create(
  persist(
    (set, get) => ({
      quizzes: [],
      questions: ["A", "B"],
      selectedQuizz: null,
      currentQuestion: 0,
      hasCompletedSection2: false,
      isSection2Locked: true, // Initial state for Section 2 lock

      selectQuizz: (quizz) => {
        set({ questions: quizz.soal });
      },

      fetchQuizzes: async () => {
        const { isSection2Locked, hasCompletedSection2 } = get();

        if (isSection2Locked) {
          console.warn('Section 2 is locked. Cannot fetch quizzes.');
          return;
        }

        if (hasCompletedSection2) {
          console.warn('Questions already completed. No need to fetch again.');
          return;
        }

        try {
          const res = await fetch(`http://localhost:3000/data.json`);
          const json = await res.json();
          const quizzes = json.soal;
          set({ quizzes, questions: quizzes, hasCompletedSection2: false });
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
        const { questions } = get();
        const score = questions.filter((q) => q.isCorrectUserAnswer).length;
        set({ hasCompletedSection2: true, currentQuestion: 0, score });
      },

      goNextQuestion: () => {
        const { currentQuestion, questions } = get();
        const nextQuestion = currentQuestion + 1;
        console.log(`Current: ${currentQuestion}, Next: ${nextQuestion}`);
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
          hasCompletedSection2: false,
          isSection2Locked: true, // Reset lock state
        });
      },

      unlockSection2: () => {
        set({ isSection2Locked: false });
      },
    }),
    {
      name: 'quizz2',
    }
  )
);

export default useQuestion2Store;
