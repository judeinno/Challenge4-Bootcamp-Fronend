import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Questions, mapStateToProps } from './index';


describe('Test detail component', () => {
  beforeEach(() => {
    const singleQuestion = {
      Question: 'How train a dragon?',
    };

    mount(
      <MemoryRouter>
        <Questions
          dispatch={jest.fn}
          data={{ questions: [singleQuestion] }}
        />
      </MemoryRouter>,
    );
  });
  it('should map state to props corrcetly', () => {
    const state = {
      questionsReducer: {
        results: {
          question: 'How to train a dragon?',
        },
      },
    };

    const expectedResult = {
      data: {
        results: { question: 'How to train a dragon?' },
      },
    };
    const componetState = mapStateToProps(state);
    expect(componetState).toEqual(expectedResult);
  });
});
