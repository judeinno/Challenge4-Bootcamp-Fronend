import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
};


const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_QUESTIONS_SUCCESS:
      return { ...state, questions: action.questions };
    case ACTION_TYPE.FETCH_QUESTIONS_FAILURE:
      return { ...state, errorMessage: action.errorMessage };
    default:
      return state;
  }
};

export default questionsReducer;
