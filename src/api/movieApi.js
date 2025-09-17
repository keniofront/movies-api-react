const API_URL = "https://www.omdbapi.com/";
const API_KEY = "d6313c16";

// Lista de alguns filmes de ficção científica populares
const sciFiMovies = [
  "Inception",
  "Interstellar",
  "The Matrix",
  "The Terminator",
  "Avatar",
  "Blade Runner",
  "Blade Runner 2049",
  "Arrival",
  "Ex Machina",
  "Gravity",
  "Alien",
  "Aliens",
  "The Martian",
  "E.T.",
  "Star Wars: Episode IV - A New Hope",
  "Star Wars: The Empire Strikes Back",
  "Star Wars: Return of the Jedi",
  "Minority Report",
  "District 9",
];

const fetchMovieByTitle = async (title) => {
  const response = await fetch(
    `${API_URL}?t=${encodeURIComponent(title)}&apikey=${API_KEY}&plot=full`,
  );
  return await response.json();
};

export const getAllMovies = async () => {
  const promises = sciFiMovies.map((title) => fetchMovieByTitle(title));
  return await Promise.all(promises);
};

export const getMovieById = async (id) => {
  const response = await fetch(
    `${API_URL}?i=${id}&apikey=${API_KEY}&plot=full`,
  );
  return await response.json();
};
