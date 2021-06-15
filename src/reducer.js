import * as action from "./actionTypes";
import * as actions from "./actionTypes";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++state.length,
          description: action.payload.description,
          resolved: false
        }
      ];
    case actions.BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id);
    default:
      return state;
  }
}