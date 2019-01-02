import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchQuestionsSuccess, fetchQuestionsThunk,
} from './index';
import ACTION_TYPE from '../actionTypes';


describe('Get Questions Actions tests', () => {
  let store;
  let actionTypesData;
  let response;
  beforeEach(() => {
    response = { question: 'How to go to school?' };
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
    actionTypesData = actionType => ({
      type: actionType,
      questions: response,
    });
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('Get questions successfull', () => {
    moxios.stubRequest('https://stackoverflow-lite-challenge-3.herokuapp.com/api/v1/questions', {
      status: 200,
      response: { message: 'ok' },
    });
    store.dispatch(fetchQuestionsThunk()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(
        {
          type: ACTION_TYPE.FETCH_QUESTIONS_SUCCESS,
          payload: { message: 'ok' },
        },
      ));
    });
  });
  test('Successful get questions action', () => {
    expect(fetchQuestionsSuccess(response)).toEqual(expect.objectContaining(
      actionTypesData(ACTION_TYPE.FETCH_QUESTIONS_SUCCESS),
    ));
  });
  test('Get questions successfull', () => {
    moxios.stubRequest('https://stackoverflow-lite-challenge-3.herokuapp.com/api/v1/questions', {
      status: 400,
      responseText: { error: 'ok' },
    });
    store.dispatch(fetchQuestionsThunk()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(
        [{
          type: ACTION_TYPE.FETCH_QUESTIONS_FAILURE,
        }],
      ));
    });
  });
});
