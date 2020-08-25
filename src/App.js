import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

import Header from "./componets/header/Header"
import RadialMenu from "./componets/radialMenu/RadialMenu"

function App() {
  return (
      <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/checkout">
                        checkout
                    </Route>
                    <Route path="/login">
                        login
                    </Route>
                    <Route path="/">
                        home
                    </Route>
                </Switch>
                <RadialMenu/>
            </div>
      </Router>
  );
}

export default App;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.19.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.19.0/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
