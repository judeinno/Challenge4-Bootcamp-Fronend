import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../commons/history';
import LoginPage from '../../containers/LoginPage';
import SignUpPage from '../../containers/SignUpPage';
import Header from '../header';
import Home from '../Home';

const App = () => (
  <Router history={history}>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
