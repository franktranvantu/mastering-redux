import {createSlice, createSelector} from '@reduxjs/toolkit';
import * as actions from "./api";

let bugSize = 0;
const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++bugSize,
        description: action.payload.description,
        resolved: false,
        userId: null
      });
    },
    bugAssignedToUser: (bugs, action) => {
      const {bugId, userId} = action.payload;
      const bugIndex = bugs.list.findIndex(bug => bug.id === bugId);
      bugs.list[bugIndex].userId = userId;
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
      bugs.list.splice(index, 1);
    }
  }
});

export const {bugAdded, bugResolved, bugRemoved, bugAssignedToUser, bugsReceived} = slice.actions;
export default slice.reducer;

export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === userId)
)

export const loadBugs = () => actions.apiCallBegan({
  url: '/bugs',
  onSuccess: bugsReceived.type
})