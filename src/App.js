import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./Components/Header";
import MyRoutes from './Config/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        { MyRoutes }
      </div>
    );
  }
}

export default App;
