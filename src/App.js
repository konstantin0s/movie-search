import React, { Component } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';


class App extends Component {
  render() {
    return (
      <div className="App">
          <MovieCard />
      </div>
    );
  }
}

export default App;
