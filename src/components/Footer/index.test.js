import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

it('testing Footer', () => {
  const FooterComponent = shallow(
    <Footer />,
  );
  expect(FooterComponent).toMatchSnapshot();
});
