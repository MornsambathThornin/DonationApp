import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Thornin',
  lastName: 'Mornsambath',
  userID: 1,
  profileImage: 'https://avatars.githubusercontent.com/u/42189921?v=4',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {updateFirstName, resetToInitialState} = User.actions;

export default User.reducer;
