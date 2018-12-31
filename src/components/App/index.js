import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../commons/history';
import LoginPage from '../../containers/LoginPage';
import SignUpPage from '../../containers/SignUpPage';
import Header from '../header';
import Home from '../Home';
import Footer from '../Footer';

const App = () => (
  <Router history={history}>
    <React.Fragment>
      <Header history={history} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
