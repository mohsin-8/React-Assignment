import React from 'react';
import { Routes, Route } from "react-router-dom";

// import Components
import Login from './Components/Login';
import Home from './Components/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;