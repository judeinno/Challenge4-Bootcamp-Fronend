import React from 'react';
import { shallow } from 'enzyme';
import Login from './index';

it('testing login', () => {
  const loginComponent = shallow(
    <Login />,
  );
  expect(loginComponent).toMatchSnapshot();
});
