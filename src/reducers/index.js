import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import questionsReducer from './getquestionsReducer';

const reducer = combineReducers({
  loginReducer,
  signupReducer,
  questionsReducer,
});

export default reducer;
