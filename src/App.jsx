// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import './index.css';

function App() {
  return (
    // Habilita o uso de rotas na aplicação
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />
        {/* Página de detalhes */}
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
