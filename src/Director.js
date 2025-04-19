import React from 'react';
import NavBar from '../components/NavBar';

function Directors() {
  // directors data should be fetched or passed as props
  const directors = [];
  
  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;