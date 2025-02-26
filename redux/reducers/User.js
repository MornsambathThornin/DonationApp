import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  profileImage: 'https://avatars.githubusercontent.com/u/42189921?v=4',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {
        ...state,
        ...{isLoggedIn: true},
        ...action.payload,
      };
    },
    resetToInitialState: () => {
      return initialState;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {logIn, resetToInitialState, updateToken} = User.actions;

export default User.reducer;
