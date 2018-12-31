import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  loginSuccess, loginThunk,
} from './index';
import ACTION_TYPE from '../actionTypes';


describe('Login  Actions tests', () => {
  let store;
  let actionTypesData;
  let response;
  beforeEach(() => {
    response = { username: 'jude' };
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
    actionTypesData = actionType => ({
      type: actionType,
      payload: response,
    });
    // import and pass your custom axios instance to this method
    moxios.install();
  });
  afterEach(() => {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });
  test('Login successfull', () => {
    moxios.stubRequest('https://stackoverflow-lite-challenge-3.herokuapp.com/api/v1/auth/login', {
      status: 200,
      response: { message: 'ok' },
    });
    store.dispatch(loginThunk()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(
        {
          type: ACTION_TYPE.USER_LOGIN_SUCCESS,
          payload: { message: 'ok' },
        },
      ));
    });
  });
  test('Successful login action', () => {
    expect(loginSuccess(response)).toEqual(expect.objectContaining(
      actionTypesData(ACTION_TYPE.USER_LOGIN_SUCCESS),
    ));
  });
  test('Login successfull', () => {
    moxios.stubRequest('https://stackoverflow-lite-challenge-3.herokuapp.com/api/v1/auth/login', {
      status: 400,
      responseText: { error: 'ok' },
    });
    store.dispatch(loginThunk()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(
        [{
          type: ACTION_TYPE.USER_LOGIN_FAILED,
        }],
      ));
    });
  });
});

