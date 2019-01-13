import Header from './components/common/header';
import React, { Component } from 'react';
import { AppRoutes } from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <AppRoutes />
      </div>
    );
  }
}

export default App;
