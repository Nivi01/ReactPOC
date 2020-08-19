import {
    AUTH_ERROR,
    LOGIN_SUCCESS,
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN_SUCCESS:
        console.log("SUCCESS");
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        };
      case AUTH_ERROR:
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null
        };
      default:
        return state;
    }
  }
  