import React from 'react';
import NavBar from '../components/NavBar';

function Actors() {
  // actors data should be fetched or passed as props
  const actors = [];
  
  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;