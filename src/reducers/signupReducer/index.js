import swal from 'sweetalert2';
import ACTION_TYPE from '../../actions/actionTypes';
import swalMessages from '../../actions/swalAlerts';

const initalState = {
};

const signupReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.USER_SIGNUP_SUCCESS:
      swal({ ...swalMessages.REGISTRATION_SUCCESSFUL, text: action.payload });
      setTimeout(() => window.location.replace('/login'), 2500);
      return { ...state, signupPost: action.payload };

    case ACTION_TYPE.USER_SIGNUP_FAILED:
      swal({ ...swalMessages.SIGNUP_ERROR, text: action.errorMessage.message });
      return { ...state, signupPostFail: action.errorMessage.message };

    case ACTION_TYPE.USER_SIGNUP_DATA:
      return { ...state, signupPostData: action.payload };

    default:
      return state;
  }
};
export default signupReducer;
