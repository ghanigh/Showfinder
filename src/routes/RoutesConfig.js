import React from 'react';
import { Route } from 'react-router-dom';
import Questionnaire from './components/Questionnaire';

const RouteConfig = () => {
  return (
    <div>
      <Route path='/questionnaire' component={Questionnaire} />
    </div>
  );
};

export default RouteConfig;
