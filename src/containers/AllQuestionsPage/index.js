import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchQuestionsThunk from '../../actions/getquestionsActions';
import QuestionsDisplay from '../../components/AllQuestions';

export class Questions extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuestionsThunk());
  }

  render() {
    const { data } = this.props;
    return (
      <div className="questions-body">
        {data.questions
          ? (
            <div className="row">
              {
                  data.questions.map(question => (
                    <QuestionsDisplay question={question} key={question.qn_id} />
                  ))
              }
            </div>
          )
          : <span>Loading....</span>
        }
      </div>
    );
  }
}

Questions.propTypes = {
  data: PropTypes.shape({
    questions: PropTypes.array,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export const mapStateToProps = state => ({ data: state.questionsReducer });
export default connect(mapStateToProps)(Questions);
