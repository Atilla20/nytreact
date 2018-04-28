import React, { Component } from 'react';
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () =>
  <Router>
      <div>
          <Route path="/" component={Main} />
      </div>
  </Router>;


export default App;
