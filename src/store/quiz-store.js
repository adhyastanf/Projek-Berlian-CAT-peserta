import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useQuestion2Store from './quiz2-store';

const useQuestionStore = create(
  persist(
    (set, get) => ({
      quizzes: [],
      questions: [],
      selectedQuizz: null,
      currentQuestion: 0,
      hasCompletedSection1: false,
      score: 0,
      temporarySelection: null,
      isQuiz1Finished: false,
      isQuiz1Restricted: false,
      isLoadingSection:false,

      selectQuizz: (quizz) => {
        set({ questions: quizz.hasil });
      },

      fetchQuizzes: async (noUjian, kodeDesa) => {
        const { hasCompletedSection1 } = get();

        if (hasCompletedSection1) {
          return; // Do not fetch if quiz is completed
        }
        try {
          const res = await axios.get(`http://18.141.142.63:8080/genSoal`, {
            params: { noUjian, kodeDesa },
          });
          const quizzes = res.data.hasil;

          set({
            quizzes,
            questions: quizzes,
          });
        } catch (error) {
          console.error(error);
        }
      },
      fetchStatusQuiz: async (noUjian, kodeDesa) => {
        try {
          const statusUpdate = {
            noUjian,
            kodeDesa,
          };

          const statusRes = await axios.get('http://18.141.142.63:8080/status', {
            params: statusUpdate,
          });

          const res = await axios.get(`http://18.141.142.63:8080/nilai`, {
            params: { noUjian, kodeDesa },
          });
          const score = res.data.nilai.nilai;

          set({
            hasCompletedSection1: statusRes?.data?.status?.quiz1?.isFinished,
            isQuiz1Finished: statusRes?.data?.status?.quiz1?.isFinished,
            isQuiz1Restricted: statusRes?.data?.status?.quiz1?.isRestricted,
            score,
            isLoadingSection:true
          });
          
        } catch (error) {
          console.error('Failed to update quiz1 status:', error);
          set({isLoadingSection:false})
        } finally {
          set({isLoadingSection:false})
        }
      },

      selectAnswer: (questionIdOrSoalText, selectedAnswer) => {
        const { questions } = get();
        const newQuestions = [...questions];
        const questionIndex = newQuestions.findIndex((q) => (q.jenis === 'isian' ? q.soalText === questionIdOrSoalText : q.soal === questionIdOrSoalText));
        const questionInfo = newQuestions[questionIndex];

        if (questionInfo.jenis === 'soal') {
          const isCorrectUserAnswer = questionInfo?.kunciJawabanText === selectedAnswer.optionText;
          newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            jawaban: selectedAnswer.optionText,
            userSelectedAnswer: selectedAnswer,
            isAnswered: true,
          };
        } else if (questionInfo.jenis === 'isian') {
          newQuestions[questionIndex] = {
            ...questionInfo,
            jawaban: selectedAnswer.jawabanText,
            isAnswered: true,
          };
        }

        set({ questions: newQuestions, temporarySelection: { questionIdOrSoalText, selectedAnswer } });
      },

      onCompleteQuestions: async (noUjian, kodeDesa) => {
        try {
          const res = await axios.post(`http://18.141.142.63:8080/nilai`, {noUjian, kodeDesa});
          const score = res.data.nilai.nilai;

          // Update the quiz status on the server
          const statusUpdate = await axios.put('http://18.141.142.63:8080/status', {
            quiz: 'quiz1',
            noUjian,
            kodeDesa,
            statusUpdate: {
              onProgress: false,
              isFinished: true,
              isRestricted: true,
            },
          });
          // Update store with the new status
          set({
            hasCompletedSection1: statusUpdate?.data?.status?.quiz1?.isFinished,
            isQuiz1Finished: statusUpdate?.data?.status?.quiz1?.isFinished,
            isQuiz1Restricted: statusUpdate?.data?.status?.quiz1?.isRestricted,
            currentQuestion: 0, score
          });

          // Unlock Section 2 when Section 1 is completed
          useQuestion2Store.getState().unlockSection2(noUjian, kodeDesa);
        } catch (error) {
          console.error(error);
        }
      },

      goNextQuestion: () => {
        const { currentQuestion, questions, temporarySelection } = get();
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
          const updatedQuestions = [...questions];
          const currentQuestionData = updatedQuestions[currentQuestion];

          if (temporarySelection && (temporarySelection.questionIdOrSoalText === currentQuestionData.soal || temporarySelection.questionIdOrSoalText === currentQuestionData.soalText)) {
            updatedQuestions[currentQuestion] = {
              ...currentQuestionData,
              isAnswered: true,
              ...(currentQuestionData.jenis === 'isian' && {
                jawaban: temporarySelection.selectedAnswer.jawabanText,
              }),
              userSelectedAnswer: temporarySelection.selectedAnswer,
            };
          }

          set({ questions: updatedQuestions, currentQuestion: nextQuestion, temporarySelection: null });
        }
      },

      goPreviousQuestion: () => {
        const { currentQuestion, questions, temporarySelection } = get();
        const previousQuestion = currentQuestion - 1;

        if (previousQuestion >= 0) {
          const updatedQuestions = [...questions];
          const currentQuestionData = updatedQuestions[currentQuestion];

          if (temporarySelection && (temporarySelection.questionIdOrSoalText === currentQuestionData.soal || temporarySelection.questionIdOrSoalText === currentQuestionData.soalText)) {
            updatedQuestions[currentQuestion] = {
              ...currentQuestionData,
              isAnswered: true,
              ...(currentQuestionData.jenis === 'isian' && {
                jawaban: temporarySelection.selectedAnswer.jawabanText,
              }),
              userSelectedAnswer: temporarySelection.selectedAnswer,
            };
          }

          set({ questions: updatedQuestions, currentQuestion: previousQuestion, temporarySelection: null });
        }
      },

      goToQuestion: (index) => {
        const { currentQuestion, questions, temporarySelection } = get();
        const updatedQuestions = [...questions];
        const currentQuestionData = updatedQuestions[currentQuestion];

        if (temporarySelection && (temporarySelection.questionIdOrSoalText === currentQuestionData.soal || temporarySelection.questionIdOrSoalText === currentQuestionData.soalText)) {
          updatedQuestions[currentQuestion] = {
            ...currentQuestionData,
            isAnswered: true,
            ...(currentQuestionData.jenis === 'isian' && {
              jawaban: temporarySelection.selectedAnswer.jawabanText,
            }),
            userSelectedAnswer: temporarySelection.selectedAnswer,
          };
        }

        set({ questions: updatedQuestions, currentQuestion: index, temporarySelection: null });
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
