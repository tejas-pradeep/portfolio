import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';

import './App.css';


function App() {
  return (
      <body>
        <Router>
          <Header/>
          <Switch>
            <Route path={"/"} exact />

          </Switch>
        </Router>
      </body>

  );
}

export default App;
