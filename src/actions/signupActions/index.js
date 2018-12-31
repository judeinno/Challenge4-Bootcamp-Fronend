import axios from 'axios';
import ACTION_TYPE from '../actionTypes';

export const signupData = response => ({
  type: ACTION_TYPE.USER_SIGNUP_DATA,
  payload: response,
});

export const signupSuccess = response => ({
  type: ACTION_TYPE.USER_SIGNUP_SUCCESS,
  payload: response,
});

export const signupFailure = errorMessage => ({
  type: ACTION_TYPE.USER_SIGNUP_FAILED,
  errorMessage,
});

export const signupThunk = data => (dispatch) => {
  const userdata = {
    ...data,
  };
  const url = 'https://stackoverflow-lite-challenge-3.herokuapp.com/api/v1/auth/signup';
  return axios.post(url, userdata)
    .then((res) => {
      const resData = res.data.message;
      console.log('>>>>>>>>>>>>>>>>>>>', res);
      dispatch(signupSuccess(resData));
    }).catch((error) => {
      const errorData = error.response.data;
      console.log('>>>>>>>>>>>>>>>>>>>', errorData);
      dispatch(signupFailure(errorData));
    });
};
export default signupThunk;
