import api from '../utils/api';
import { setAlert } from './alert';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './types';

// Login User
export const login = (userid, password) => async dispatch => {
  const body = { userid, password };
    
  try {
    const res = await api.post('/auth', body);
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

  } catch (err) {
    
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

