import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Login from './index';

it('testing login', () => {
  const loginComponent = shallow(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );
  expect(loginComponent).toMatchSnapshot();
});
