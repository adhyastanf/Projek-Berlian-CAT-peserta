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
      temporarySelection: null, // New state to track temporary selection

      selectQuizz: (quizz) => {
        set({ questions: quizz.hasil });
      },
      
      fetchQuizzes: async () => {
        const { hasCompletedSection1 } = get();

        // if (hasCompletedSection1) {
        //   return; // Do not fetch if quiz is completed
        // }
        try {
          const res = await fetch(`http://localhost:3000/data3.json`);
          const json = await res.json();
          const quizzes = json.hasil;
          set({ quizzes, questions: quizzes, hasCompletedSection1: false });
        } catch (error) {
          console.error(error);
        }
      },

      selectAnswer: (questionId, selectedAnswer) => {
        const { questions } = get();
        const newQuestions = [...questions];
        const questionIndex = newQuestions.findIndex((q) => q.soal === questionId);
        const questionInfo = newQuestions[questionIndex];
        const isCorrectUserAnswer = questionInfo?.kunciJawabanText === selectedAnswer.optionText;

        newQuestions[questionIndex] = {
          ...questionInfo,
          isCorrectUserAnswer,
          userSelectedAnswer: selectedAnswer,
        };
        set({ temporarySelection: { questionId, selectedAnswer } });
      },

      onCompleteQuestions: () => {
        set({ hasCompletedSection1: true, currentQuestion: 0, score: 100 });
        useQuestion2Store.getState().unlockSection2(); // Unlock Section 2 when Section 1 is completed
      },

      goNextQuestion: () => {
        const { currentQuestion, questions, temporarySelection } = get();
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
          const updatedQuestions = [...questions];
          const currentQuestionData = updatedQuestions[currentQuestion];

          if (temporarySelection && temporarySelection.questionId === currentQuestionData.soal) {
            updatedQuestions[currentQuestion] = {
              ...currentQuestionData,
              isAnswered: true,
              userSelectedAnswer: temporarySelection.selectedAnswer,
            };
            set({ questions: updatedQuestions, currentQuestion: nextQuestion, temporarySelection: null });
          } else {
            set({ currentQuestion: nextQuestion });
          }
        }
      },

      goPreviousQuestion: () => {
        const { currentQuestion, questions, temporarySelection } = get();
        const previousQuestion = currentQuestion - 1;

        if (previousQuestion >= 0) {
          const updatedQuestions = [...questions];
          const currentQuestionData = updatedQuestions[currentQuestion];

          if (temporarySelection && temporarySelection.questionId === currentQuestionData.soal) {
            updatedQuestions[currentQuestion] = {
              ...currentQuestionData,
              isAnswered: true,
              userSelectedAnswer: temporarySelection.selectedAnswer,
            };
            set({ questions: updatedQuestions, currentQuestion: previousQuestion, temporarySelection: null });
          } else {
            set({ currentQuestion: previousQuestion });
          }
        }
      },

      goToQuestion: (index) => {
        const { currentQuestion, questions, temporarySelection } = get();
        const updatedQuestions = [...questions];
        const currentQuestionData = updatedQuestions[currentQuestion];

        if (temporarySelection && temporarySelection.questionId === currentQuestionData.soal) {
          updatedQuestions[currentQuestion] = {
            ...currentQuestionData,
            isAnswered: true,
            userSelectedAnswer: temporarySelection.selectedAnswer,
          };
          set({ questions: updatedQuestions, currentQuestion: index, temporarySelection: null });
        } else {
          set({ currentQuestion: index });
        }
      },

      reset: () => {
        set({
          currentQuestion: 0,
          questions: [],
          temporarySelection: null,
        });
      },
    }),
    {
      name: 'quizz',
    }
  )
);

export default useQuestionStore;
