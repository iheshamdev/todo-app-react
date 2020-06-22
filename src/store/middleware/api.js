import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { BASE_API_URL } from '../../constants';

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

const api = ({ dispatch }) => next => async action => {
  if (action.type !== apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);
  try {
    const response = await axios.request({
      baseURL: BASE_API_URL,
      url,
      method,
      data,
    });
    let payload = response.data;
    if (response.config.method === 'delete')
      payload = { id: url.substring(url.lastIndexOf('/') + 1) };
    if (onSuccess)
      dispatch({
        type: onSuccess,
        payload,
      });
  } catch (error) {
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
