import React from 'react';
import PropTypes from 'prop-types';
import './AllQuestions.scss';

const QuestionsDisplay = ({ question }) => (
  <div className="container question-card">
    <div className="card">
      <div className="card-body">
        <p className="card-text">{question.Question}</p>
        <a href="#" className="btn btn-primary">More</a>
      </div>
    </div>
  </div>
);

QuestionsDisplay.propTypes = {
  question: PropTypes.shape({
    qn_id: PropTypes.isRequired,
    Question: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuestionsDisplay;
