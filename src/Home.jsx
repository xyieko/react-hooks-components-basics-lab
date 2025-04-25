function Home ()  {
  return <div id="home">Home Content</div>;
}
import React from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

function Home() {
// Assuming movies data is fetched or passed as props
const movies = []; // This should be your movies data

return (
  <>
    <NavBar />
    <h1>Home Page</h1>
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </>
);
}

export default Home;