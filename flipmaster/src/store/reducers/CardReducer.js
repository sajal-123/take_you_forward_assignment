// questionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
  name: 'questions',
  initialState: {
    list: [],
    currentQuestion: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setQuestions(state, action) {
      state.list = action.payload;
    },
    setCurrentQuestion(state, action) {
      state.currentQuestion = action.payload;
    },
  },
});

export const { setQuestions, setCurrentQuestion } = questionSlice.actions;

export default questionSlice.reducer;
