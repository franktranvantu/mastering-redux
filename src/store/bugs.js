import {createAction, createReducer} from '@reduxjs/toolkit';

// Action creators
export const bugAdded = createAction('bugAdded');
export const bugResolved = createAction('bugResolved');
export const bugRemoved = createAction('bugRemoved');

let bugSize = 0;
// Reducer
export default createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    console.log(bugs)
    bugs.push({
      id: ++bugSize,
      description: action.payload.description,
      resolved: false
    });
  },
  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
  [bugRemoved.type]: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id);
    bugs.splice(index, 1);
  }
});