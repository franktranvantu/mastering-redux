import {createSlice, createSelector} from '@reduxjs/toolkit';

export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === userId)
)

let bugSize = 0;
const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++bugSize,
        description: action.payload.description,
        resolved: false,
        userId: null
      });
    },
    bugAssignedToUser: (bugs, action) => {
      const {bugId, userId} = action.payload;
      const bugIndex = bugs.findIndex(bug => bug.id === bugId);
      bugs[bugIndex].userId = userId;
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs.splice(index, 1);
    }
  }
});

export const {bugAdded, bugResolved, bugRemoved, bugAssignedToUser} = slice.actions;
export default slice.reducer;