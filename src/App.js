import * as React from 'react';
import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import PokemonDetails from './components/PokemonDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

