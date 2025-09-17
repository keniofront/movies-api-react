import { useEffect, useState } from "react";
import { getAllMovies } from "../api/movieApi";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllMovies();
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container homeContainer">
        <h1>Catálogo de Filmes Sci-Fi</h1>
        <div className="catalog">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movieCard">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <Link to={`/movie/${movie.imdbID}`} className="btnDetails">
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
