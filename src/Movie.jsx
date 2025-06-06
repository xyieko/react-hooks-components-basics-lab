import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams();
  
  
  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map(genre => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </>
  );
}

export default Movie;