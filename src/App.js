import * as React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Header />
      <Box sx={{ padding: '20px' }}>
        <h2>Escuela Particular 1</h2>
      </Box>
      <Carousel />
    </>
  );
}

export default App;

