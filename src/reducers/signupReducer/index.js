import ACTION_TYPE from '../../actions/actionTypes';


const signupReducer = (state = { textmessage: 'Your Signed In' }, action) => {
  switch (action.type) {
    case ACTION_TYPE.USER_SIGNUP_SUCCESS:
      return state;
    default:
      return state;
  }
};
export default signupReducer;
