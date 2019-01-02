import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Questions from '../../containers/AllQuestionsPage';
import './Home.scss';

const Home = () => (
  <BrowserRouter>
    <div className="container home">
      <h3>Questions</h3>
      <Route path="/" component={Questions} />
    </div>
  </BrowserRouter>
);

export default Home;
