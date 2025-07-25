// src/components/MovieCard.jsx

import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      {/* Link para página de detalhes */}
      <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
    </div>
  );
};

export default MovieCard;
