import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./Redux/store";
import PublicRoute from "./BaseLayout/PublicRoute";
import Home from "./Pages/Home";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PublicRoute path="/" exact component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
