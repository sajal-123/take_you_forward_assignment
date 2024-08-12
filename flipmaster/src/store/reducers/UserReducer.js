import { createSlice } from '@reduxjs/toolkit';

const userInfoFromStorage = localStorage.getItem('account')
  ? JSON.parse(localStorage.getItem('account'))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
  loginInfo: userInfoFromStorage !== null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userInfo = action.payload;
      state.loginInfo = true;
      localStorage.setItem('account', JSON.stringify(state.userInfo));
    },
    clearUserData: (state) => {
      state.userInfo = null;
      state.loginInfo = false;
      localStorage.removeItem('account');
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
