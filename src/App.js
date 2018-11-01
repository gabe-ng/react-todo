import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import MyRoutes from './Config/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        { MyRoutes }
      </div>
    );
  }
}

export default App;
