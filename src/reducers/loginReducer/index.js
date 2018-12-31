import swal from 'sweetalert2';
import ACTION_TYPE from '../../actions/actionTypes';
import swalMessages from '../../actions/swalAlerts';

const initalState = {
};

const loginReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.USER_LOGIN_SUCCESS:
      swal({ ...swalMessages.LOGIN_SUCCESSFUL });
      setTimeout(() => window.location.replace('/home'), 2500);
      return { ...state, loginPost: action.payload };

    case ACTION_TYPE.USER_LOGIN_FAILED:
      swal({ ...swalMessages.SIGNUP_ERROR, text: action.errorMessage.message });
      return { ...state, loginPostFail: action.errorMessage.message };

    case ACTION_TYPE.USER_LOGIN_DATA:
      return { ...state, loginPostData: action.payload };

    default:
      return state;
  }
};
export default loginReducer;
