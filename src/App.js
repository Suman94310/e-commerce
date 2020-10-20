import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import 'fontsource-roboto';


// importing react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// importing components
import Home from "./components/home/home"


function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Switch>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route path="/users">
              {/* <Users /> */}
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
