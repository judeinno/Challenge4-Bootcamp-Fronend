import axios from 'axios';
import ACTION_TYPE from '../actionTypes';

export const fetchQuestionsSuccess = questions => ({
  type: ACTION_TYPE.FETCH_QUESTIONS_SUCCESS,
  questions,
});

export const fetchQuestionsFailure = errorMessage => ({
  type: ACTION_TYPE.FETCH_QUESTIONS_FAILURE,
  errorMessage,
});

export const fetchQuestionsThunk = () => dispatch => axios.get('https://stackoverflow-lite-challenge-3.herokuapp.com/api/v1/questions')
  .then((response) => {
    dispatch(fetchQuestionsSuccess(response.data));
  })
  .catch(() => {
    dispatch(fetchQuestionsFailure('Check your internet conectivity'));
  });

export default fetchQuestionsThunk;
