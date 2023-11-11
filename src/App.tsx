import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from './themes/theme';
import Home from './pages/Home';
import Livre from './pages/Livre';

function App() {
  
  return (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/livre' element={<Livre />} />
          </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
