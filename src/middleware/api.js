import axios from "axios";
import * as actions from '../store/api';

const api = ({dispatch}) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) {
    return next(action);
  }
  const {url, method, data, onStart, onSuccess, onError} = action.payload;
  if (onStart) {
    dispatch({type: onStart});
  }
  next(action);
  try {
    const {data: bugs} = await axios.request({
      baseURL: 'http://localhost:9002/api',
      url,
      method,
      data
    });
    // General
    dispatch(actions.apiCallSuccess(bugs));
    // Specific
    if (onSuccess) {
      dispatch({type: onSuccess, payload: bugs});
    }
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) {
      dispatch({type: onError, payload: error.message});
    }
  }

}

export default api;