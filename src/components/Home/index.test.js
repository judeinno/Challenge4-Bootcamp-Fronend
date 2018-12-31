import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

it('testing Home', () => {
  const HomeComponent = shallow(
    <Home />,
  );
  expect(HomeComponent).toMatchSnapshot();
});
