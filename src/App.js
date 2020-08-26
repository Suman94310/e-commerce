import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

import Header from "./componets/header/Header"
import RadialMenu from "./componets/radialMenu/RadialMenu"
import Banner from "./componets/banner/banner"
import Product from "./componets/product/Product"

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
                        <Banner/>
                        <Product
                            id="1"
                            title="Tshirt"
                            price="100"
                            rating={2}
                            image="https://images-na.ssl-images-amazon.com/images/I/5107G94AQaL._UL1236_.jpg"
                        />
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
