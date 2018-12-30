import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App component', () => {
  const AppComponent = shallow(<App />);
  it('should render without crashing', () => {
    expect(AppComponent.length).toEqual(1);
  });
});
