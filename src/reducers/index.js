import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const reducer = combineReducers({
  loginReducer,
  signupReducer,
});

export default reducer;
