import {createSlice} from '@reduxjs/toolkit';

let userSize = 0;
const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: ++userSize,
        name: action.payload.name
      });
    }
  }
});

export const {userAdded} = slice.actions;
export default slice.reducer;