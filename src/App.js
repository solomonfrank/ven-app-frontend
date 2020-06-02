import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PublicRoute from "./BaseLayout/PublicRoute";

import "./App.css";

import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <PublicRoute path="/" exact component={Home} />
    </Router>
  );
}

export default App;
