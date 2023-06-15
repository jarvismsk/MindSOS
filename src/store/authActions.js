import axios from 'axios';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './types';

export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signupSuccess = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: user,
  };
};

export const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const signup = (userData) => {
  return (dispatch) => {
    dispatch(signupRequest());

    // Make API request to signup endpoint
    axios.post('/api/signup', userData)
      .then((response) => {
        // Dispatch success action with the user data
        dispatch(signupSuccess(response.data.user));
      })
      .catch((error) => {
        // Dispatch failure action with the error message
        dispatch(signupFailure(error.response.data.message));
      });
  };
};

export const login = (userData) => {
  return (dispatch) => {
    dispatch(loginRequest());

    // Make API request to login endpoint
    axios.post('/api/login', userData)
      .then((response) => {
        // Dispatch success action with the user data
        dispatch(loginSuccess(response.data.user));
      })
      .catch((error) => {
        // Dispatch failure action with the error message
        dispatch(loginFailure(error.response.data.message));
      });
  };
};
