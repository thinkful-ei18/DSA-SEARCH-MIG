import React, { Component } from 'react';
import LinearSearch from './LinearSearch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DSA Searching</h1>
        </header>

        <LinearSearch />

      </div>
    );
  }
}

export default App;
