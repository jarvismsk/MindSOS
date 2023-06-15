import { combineReducers } from 'redux';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

// Initial state for the authentication
const initialAuthState = {
  loading: false,
  user: null,
  error: null,
};

// Auth Reducer
const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
