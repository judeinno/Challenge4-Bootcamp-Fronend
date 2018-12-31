import expect from 'expect';
import signupReducer from './index';
import ACTION_TYPE from '../../actions/actionTypes';

describe('Test signupReducer Reducer', () => {
  const initalState = {
  };
  const data1 = 'Jude';
  const data3 = { Username: 'Jude' };
  const action = (actionType, userData) => ({
    type: actionType,
    payload: userData,
  });
  const expectedData1 = {
    signupPost: data1,
  };
  const expectedData3 = {
    signupPostData: data3,
  };
  test('test sign up succesfully', () => {
    expect(signupReducer(initalState, action(ACTION_TYPE.USER_SIGNUP_SUCCESS,
      data1))).toEqual(expectedData1);
  });

  test('test sign up data failed', () => {
    expect(signupReducer(initalState, action(ACTION_TYPE.USER_SIGNUP_DATA,
      data3))).toEqual(expectedData3);
  });
});
