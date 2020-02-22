import React, { Component } from 'react';
import './App.css';
import StaticTable from './components/StaticTable';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
			<h1>Free Diving Training</h1>
			<Timer></Timer>
			<StaticTable></StaticTable>
        </header>
      </div>
    );
  }
}

export default App;
