import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./compnents/Home/Home";
import Header from "./compnents/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
