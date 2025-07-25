// src/api/movieApi.js

// Aqui podemos trocar futuramente para o TMDB
const BASE_URL = 'http://localhost:3000'; // Ex: https://api.themoviedb.org/3
const API_KEY = ''; // No futuro você pode adicionar sua chave aqui

// Busca todos os filmes (GET /movies)
export const getAllMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies`);
  return await response.json();
};

// Busca detalhes de um filme por ID (GET /movies/:id)
export const getMovieById = async (id) => {
  const response = await fetch(`${BASE_URL}/movies/${id}`);
  return await response.json();
};
