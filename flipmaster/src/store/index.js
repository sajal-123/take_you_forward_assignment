// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserReducer.js';
import cardReducer from './reducers/CardReducer.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    card: cardReducer,
  },
});

// If you need to export RootState and AppDispatch types in TypeScript, you can remove them in JavaScript.
