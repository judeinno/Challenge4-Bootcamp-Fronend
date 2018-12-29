import ACTION_TYPE from '../../actions/actionTypes';


const loginReducer = (state = { message: "Your logged In" }, action) => {
  switch (action.type) {
    case ACTION_TYPE.USER_LOGIN_SUCCESS:
      return state;
    default:
      return state;
  }
};
export default loginReducer;
