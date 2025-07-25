// src/pages/Home.jsx

import { useEffect, useState } from 'react';
import { getAllMovies } from '../api/movieApi';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  // useEffect é usado para buscar os filmes assim que a página carregar
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllMovies();
      setMovies(data); // atualiza o estado com os filmes recebidos
    };

    fetchData();
  }, []); // [] garante que isso só execute 1x (na montagem do componente)

  return (
    <div>
      <h1>Catálogo de Filmes</h1>

      {/* Lista todos os filmes usando o componente MovieCard */}
      <div className="catalog">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
