
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {}
  const [actors, setActors] = useState([])
  useEffect(()=> {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(data => setActors(data))
  },[])
  console.log(actors);
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
      <h1>Actors Page</h1>
        {actors.map((actor)=>(
          <article>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );