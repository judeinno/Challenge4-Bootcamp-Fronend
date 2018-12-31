import expect from 'expect';
import combinedReducers from '.';
import signupReducer from './signupReducer';

const initialState = {
  loginReducer: {},
  signupReducer: {},
};

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(combinedReducers(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state for user reducer', () => {
    expect(signupReducer(undefined, {})).toEqual(initialState.signupReducer);
  });
});
