import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Home from './Components/Home';
import Movies from './Components/Movies';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  )
}

export default App;