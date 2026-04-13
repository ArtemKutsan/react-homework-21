import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Question 1?',
      answers: [
        { id: 1, text: 'Option 1' },
        { id: 2, text: 'Option 2' },
      ],
      correctAnswerId: 1,
    },
    {
      id: 2,
      text: 'Question 2?',
      answers: [
        { id: 1, text: 'Option 1' },
        { id: 2, text: 'Option 2' },
      ],
      correctAnswerId: 2,
    },
    {
      id: 3,
      text: 'Question 3?',
      answers: [
        { id: 1, text: 'Option 1' },
        { id: 2, text: 'Option 2' },
      ],
      correctAnswerId: 1,
    },
    {
      id: 4,
      text: 'Question 4?',
      answers: [
        { id: 1, text: 'Option 1' },
        { id: 2, text: 'Option 2' },
      ],
      correctAnswerId: 1,
    },
    {
      id: 5,
      text: 'Question 5?',
      answers: [
        { id: 1, text: 'Option 1' },
        { id: 2, text: 'Option 2' },
      ],
      correctAnswerId: 2,
    },
  ],
  userAnswers: {},
  submitted: false,
  score: 0,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answerId } = action.payload;
      state.userAnswers[questionId] = answerId;
    },
    submitQuestionnaire: (state) => {
      state.submitted = true;
      state.score = state.questions.reduce((score, question) => {
        if (state.userAnswers[question.id] === question.correctAnswerId) {
          return score + 1;
        }
        return score;
      }, 0);
    },
  },
});

export const { answerQuestion, submitQuestionnaire } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
