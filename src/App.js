import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const fetchMovieHandler = () =>
  {
    fetch()
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList/>
      </section>
    </React.Fragment>
  );
}

export default App;
