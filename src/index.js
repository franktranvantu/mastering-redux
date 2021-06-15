import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch((dispatch, getState) => {
  // Call an api
  // When the promise is resolved => dispatch()
  dispatch({type: 'bugReceived', bugs: [1, 2, 3]})
  console.log(getState());
  // If the promise is rejected => dispatch()
});