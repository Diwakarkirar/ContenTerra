// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Children from './components/Children';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Children} />
       
      </Routes>
    </Router>
  );
};

export default App;
