import expect from 'expect';
import loginReducer from './index';
import ACTION_TYPE from '../../actions/actionTypes';

describe('Test loginReducer Reducer', () => {
  const initalState = {
  };
  const data1 = 'Jude';
  const data3 = { Username: 'Jude' };
  const action = (actionType, userData) => ({
    type: actionType,
    payload: userData,
  });
  const expectedData1 = {
    loginPost: data1,
  };
  const expectedData3 = {
    loginPostData: data3,
  };
  test('test sign up succesfully', () => {
    expect(loginReducer(initalState, action(ACTION_TYPE.USER_LOGIN_SUCCESS,
      data1))).toEqual(expectedData1);
  });

  test('test sign up data failed', () => {
    expect(loginReducer(initalState, action(ACTION_TYPE.USER_LOGIN_DATA,
      data3))).toEqual(expectedData3);
  });
});
