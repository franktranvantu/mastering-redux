import {createAction} from '@reduxjs/toolkit';

// Action creators
export const bugAdded = createAction('bugAdded');
export const bugResolved = createAction('bugResolved');
export const bugRemoved = createAction('bugRemoved');

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++state.length,
          description: action.payload.description,
          resolved: false
        }
      ];
    case bugResolved.type:
      return state.map(bug => {
        if (bug.id === action.payload.id) {
          const resolvedBug = {...bug, resolved: true};
          return resolvedBug;
        }
        return bug;
      });
    case bugRemoved.type:
      return state.filter(bug => bug.id !== action.payload.id);
    default:
      return state;
  }
}