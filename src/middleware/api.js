import axios from "axios";
import * as actions from '../store/api';

const api = ({dispatch}) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) {
    return next(action);
  }
  next(action);
  const {url, method, data, onSuccess, onError} = action.payload;
  try {
    const {data: bugs} = await axios.request({
      baseURL: 'http://localhost:9001/api',
      url,
      method,
      data
    });
    // General
    dispatch({payload: bugs});
    // Specific
    if (onSuccess) {
      dispatch({type: onSuccess, payload: bugs});
    }
  } catch (error) {
    // General
    dispatch({payload: error});
    // Specific
    if (onError) {
      dispatch({type: onError, payload: error});
    }
  }

}

export default api;