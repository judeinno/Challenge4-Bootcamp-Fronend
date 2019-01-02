import React from 'react';
import { shallow } from 'enzyme';
import QuestionsDisplay from './index';

it('testing QuestionsDisplay', () => {
  const questionData = { question: { Question: 'How to train a Dragon?' } };
  const QuestionsDisplayComponent = shallow(
    <QuestionsDisplay question={questionData} />,
  );
  expect(QuestionsDisplayComponent).toMatchSnapshot();
});
