import React, { Component } from 'react';
import { AppRoutes } from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <p>Header here...</p>
        <AppRoutes />
      </div>
    );
  }
}

export default App;
