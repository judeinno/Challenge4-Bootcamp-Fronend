import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SignUpPage, { mapDispatchToProps } from './index';

describe('<SignUpPage />', () => {
  let SignUpPageComponent;
  beforeEach(() => {
    jest.resetModules();
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialState = { signupReducer: { signupPostData: { username: 'Jude', Password: 'password' } } };
    const store = mockStore(initialState);
    SignUpPageComponent = mount(
      <SignUpPage store={store} />,
    );
  });

  it('should render the component', () => {
    expect(SignUpPageComponent).toMatchSnapshot();
  });
  const dispatchTest = dispatch => (
    mapDispatchToProps(dispatch).signupUser({})
    && mapDispatchToProps(dispatch).signupUserData({})
  );
  it('should dispatch a method to get user input', () => {
    const dispatch = jest.fn();
    dispatchTest(dispatch);
  });

  it('should test user data without fail', () => {
    SignUpPageComponent
      .find('#user-name')
      .simulate('change', { target: { name: 'username', value: 'Jude' } });
    SignUpPageComponent
      .find('#sign-up-bt')
      .simulate('click');
  });
});
