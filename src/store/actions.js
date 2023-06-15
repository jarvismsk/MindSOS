import * as types from './types';

// User actions
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const clearUser = () => ({
  type: types.CLEAR_USER,
});

// Signup actions
export const signupRequest = (userData) => ({
  type: types.SIGNUP_REQUEST,
  payload: userData,
});

export const signupSuccess = () => ({
  type: types.SIGNUP_SUCCESS,
});

export const signupFailure = (error) => ({
  type: types.SIGNUP_FAILURE,
  payload: error,
});

// Login actions
export const loginRequest = (credentials) => ({
  type: types.LOGIN_REQUEST,
  payload: credentials,
});

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

// Doctor actions
export const setDoctors = (doctors) => ({
  type: types.SET_DOCTORS,
  payload: doctors,
});

export const addDoctor = (doctor) => ({
  type: types.ADD_DOCTOR,
  payload: doctor,
});

export const removeDoctor = (doctorId) => ({
  type: types.REMOVE_DOCTOR,
  payload: doctorId,
});

// Chat actions
export const setMessages = (messages) => ({
  type: types.SET_MESSAGES,
  payload: messages,
});

export const addMessage = (message) => ({
  type: types.ADD_MESSAGE,
  payload: message,
});

export const clearMessages = () => ({
  type: types.CLEAR_MESSAGES,
});
