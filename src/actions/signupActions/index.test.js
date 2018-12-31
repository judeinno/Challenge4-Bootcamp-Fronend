import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  signupSuccess, signupThunk,
} from './index';
import ACTION_TYPE from '../actionTypes';


describe('Sign uo Actions tests', () => {
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
  test('Successful signup action', () => {
    expect(signupSuccess(response)).toEqual(expect.objectContaining(
      actionTypesData(ACTION_TYPE.USER_SIGNUP_SUCCESS),
    ));
  });
  test('sign up successfull', () => {
    moxios.stubRequest('https://stackoverflow-lite-challenge-3.herokuapp.com/api/v1/auth/signup', {
      status: 200,
      response: { message: 'ok' },
    });
    store.dispatch(signupThunk()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(
        {
          type: ACTION_TYPE.USER_SIGNUP_SUCCESS,
          payload: { message: 'ok' },
        },
      ));
    });
  });
  test('Post article successfull', () => {
    moxios.stubRequest('https://stackoverflow-lite-challenge-3.herokuapp.com/api/v1/auth/signup', {
      status: 400,
      responseText: { error: 'ok' },
    });
    store.dispatch(signupThunk()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(
        [{
          type: ACTION_TYPE.USER_SIGNUP_FAILED,
        }],
      ));
    });
  });
});
