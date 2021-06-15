import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let listener of listeners) {
      listener();
    }
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    subscribe,
    dispatch,
    getState
  }
}

export default createStore(reducer);