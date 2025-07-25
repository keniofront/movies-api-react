// src/pages/MovieDetails.jsx

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from '../api/movieApi';

const MovieDetails = () => {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate(); // Permite voltar para a página anterior
  const [movie, setMovie] = useState(null);

  // Quando o componente carregar, busca os dados do filme
  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]); // Executa sempre que o ID mudar

  if (!movie) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default MovieDetails;
