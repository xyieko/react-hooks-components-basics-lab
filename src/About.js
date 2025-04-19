 function About() {
    return <div id="about">This is About</div>
}
import React from 'react';
import NavBar from '../components/NavBar';

function About() {
  return (
    <>
      <NavBar />
      <h1>About Our Movie App</h1>
      <p>Welcome to our movie database application!</p>
      <p>This app allows you to:</p>
      <ul>
        <li>Browse movies</li>
        <li>View actor information</li>
        <li>Explore director profiles</li>
        <li>Discover movie details</li>
      </ul>
      <p>All data is provided by our JSON server and updated regularly.</p>
      <p>Version: 1.0.0</p>
    </>
  );
}

export default About;