import expect from 'expect';
import questionsReducer from './index';
import ACTION_TYPE from '../../actions/actionTypes';

describe('Questions Reducer', () => {
  let mockData;
  let errorMessage;
  let initialState;

  beforeEach(() => {
    initialState = { questionsReducer: {} };
    mockData = {
      question: '',
    };
    errorMessage = 'Check your internet conectivity';
  });

  it('it should return the initial state', () => {
    console.log('>>>>>>>>>>>>>>>>>>>', initialState);
    expect(questionsReducer(undefined, {})).toEqual(initialState.questionsReducer);
  });

  it('it should handle FETCH_QUESTIONS_SUCCESS', () => {
    expect(
      questionsReducer(initialState.questionsReducer, {
        type: ACTION_TYPE.FETCH_QUESTIONS_SUCCESS,
        questions: mockData,
      }),
    ).toEqual({ questions: { question: '' } });
  });

  it('it should handle FETCH_QUESTIONS_FAILURE', () => {
    expect(
      questionsReducer(initialState.questionsReducer, {
        type: ACTION_TYPE.FETCH_QUESTIONS_FAILURE,
        errorMessage,
      }),
    ).toEqual({ errorMessage: 'Check your internet conectivity' });
  });
});
