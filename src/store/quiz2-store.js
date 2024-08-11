import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Definisikan state dan fungsi-fungsi yang akan digunakan dalam store
const useQuestion2Store = create(
  persist(
    (set, get) => ({
      quizzes: [],
      questions: [],
      selectedQuizz: null,
      currentQuestion: 0,
      hasCompleteAll: false,
      score: 0,
      selectQuizz: (quizz) => {
        set({ questions: quizz.soal });
      },
      fetchQuizzes: async () => {
        try {
          const res = await fetch(`http://localhost:3000/data.json`);
          const json = await res.json();
          const quizzes = json.soal; // Mengambil data soal dari json
          set({ quizzes, questions: quizzes, hasCompleteAll: false });
        } catch (error) {
          console.error(error);
        }
      },
      selectAnswer: (questionId, selectedAnswer) => {
        const { questions } = get();
        const newQuestions = [...questions];
        const questionIndex = newQuestions.findIndex((q) => q._id === questionId);
        const questionInfo = newQuestions[questionIndex];
        console.log(newQuestions);
        console.log(questionIndex);
        // Memeriksa apakah jawaban sudah ada
        const isAnswered = questionInfo?.isAnswered || false;
        const isCorrectUserAnswer = questionInfo?.kunciJawaban === selectedAnswer._id; // Menggunakan kunciJawaban

        console.log(questionInfo);
        console.log(questionInfo?.kunciJawaban);
        console.log(selectedAnswer._id);
        console.log(isCorrectUserAnswer);

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
        set({ hasCompleteAll: true, currentQuestion: 0, score });
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
          hasCompleteAll: false,
          // selectedQuizz: null,
        });
      },
    }),
    {
      name: 'quizz2', // Nama storage untuk persist middleware
    }
  )
);

export default useQuestion2Store;
