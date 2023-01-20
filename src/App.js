import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteConfig from './RouteConfig';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <RouteConfig />
      </div>
    </Router>
  );
}

export default App;
