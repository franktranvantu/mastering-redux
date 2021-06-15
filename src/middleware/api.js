import axios from "axios";

const api = ({dispatch}) => next => async action => {
  if (action.type !== 'apiCallBegan') {
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
    dispatch({type: onSuccess, payload: bugs});
  } catch (error) {
    dispatch({type: onError, payload: error});
  }

}

export default api;