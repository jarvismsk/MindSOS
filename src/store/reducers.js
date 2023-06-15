import { combineReducers } from 'redux';

const initialState = {
  user: null,
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
