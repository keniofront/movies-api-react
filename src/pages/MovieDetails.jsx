import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById } from "../api/movieApi";
import Header from "../components/Header";
import { FaArrowLeft } from "react-icons/fa";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Carregando...</p>;

  return (
    <>
      <Header />
      <div className="container descriptionContainer">
        <div className="imgContainer">
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
        <div className="contentContainer">
          <h1>{movie.Title}</h1>
          <p>
            <strong>Ano:</strong> {movie.Year}
          </p>
          <p>
            <strong>Data de Lançamento:</strong> {movie.Released}
          </p>
          <p>
            <strong>Elenco:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Gênero:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Duração:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Sinopse:</strong> {movie.Plot}
          </p>
        </div>
      </div>
      <div className="container">
        <button
          className="btnBack"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
          Voltar
        </button>
      </div>
    </>
  );
};

export default MovieDetails;
