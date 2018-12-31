import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LoginPage, { mapDispatchToProps } from './index';

describe('<LoginPage />', () => {
  let LoginPageComponent;
  beforeEach(() => {
    jest.resetModules();
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialState = { loginReducer: { loginPostData: { username: 'Jude', Password: 'password' } } };
    const store = mockStore(initialState);
    LoginPageComponent = mount(
      <LoginPage store={store} />,
    );
  });

  it('should render the component', () => {
    expect(LoginPageComponent).toMatchSnapshot();
  });
  const dispatchTest = dispatch => (
    mapDispatchToProps(dispatch).loginUser({})
    && mapDispatchToProps(dispatch).loginUserData({})
  );
  it('should dispatch a method to get user input', () => {
    const dispatch = jest.fn();
    dispatchTest(dispatch);
  });

  it('should test user data without fail', () => {
    LoginPageComponent
      .find('#user-name')
      .simulate('change', { target: { name: 'username', value: 'Jude' } });
    LoginPageComponent
      .find('#sign-up-bt')
      .simulate('click');
  });
});
