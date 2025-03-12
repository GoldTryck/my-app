import * as React from 'react';
import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </Layout>
      </Router>
  );
}

export default App;

