import {createSlice} from '@reduxjs/toolkit';

let projectSize = 0;
const slice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++projectSize,
        name: action.payload.name,
      });
    }
  }
});

export const {projectAdded} = slice.actions;
export default slice.reducer;