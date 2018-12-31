
import axios from 'axios';
import ACTION_TYPE from '../actionTypes';

export const loginData = response => ({
  type: ACTION_TYPE.USER_LOGIN_DATA,
  payload: response,
});

export const loginSuccess = response => ({
  type: ACTION_TYPE.USER_LOGIN_SUCCESS,
  payload: response,
});

export const loginFailure = errorMessage => ({
  type: ACTION_TYPE.USER_LOGIN_FAILED,
  errorMessage,
});

export const loginThunk = data => (dispatch) => {
  const userdata = {
    ...data,
  };
  const url = 'https://stackoverflow-lite-challenge-3.herokuapp.com/api/v1/auth/login';
  return axios.post(url, userdata)
    .then((res) => {
      dispatch(loginSuccess(res.data.message));
    }).catch((error) => {
      const errorData = error.response.data;
      dispatch(loginFailure(errorData));
    });
};
export default loginThunk;
