import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

it('testing Header', () => {
  const HeaderComponent = shallow(
    <Header />,
  );
  expect(HeaderComponent).toMatchSnapshot();
});
