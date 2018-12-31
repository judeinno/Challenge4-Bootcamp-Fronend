import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './index';

it('testing SignUp', () => {
  const SignUpComponent = shallow(
    <SignUp />,
  );
  expect(SignUpComponent).toMatchSnapshot();
});
