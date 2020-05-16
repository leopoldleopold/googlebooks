import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import Saved from "./components/layout/Saved"; 
import './App.css';
// import Navbar from "./components/Navbar/Navbar";
// import Jumbotron from "./components/Jumbotron/Jumbotron";

class App extends Component {
  render() {

    return (
      <Router>
      <div>
        <Route exact path="saved" component={Saved} />
        <Route exact path="/" component={Main} />
       </div>
    </Router>
  );
}
}

export default App;
