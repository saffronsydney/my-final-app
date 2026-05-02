import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HeaderMenu from './components/HeaderMenu';
import PhotoBrowser from './components/PhotoBrowser';
import Home from './components/Home';
import About from './components/About';

const Main = styled.main``;

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setPhotos(data))
      .catch(error => console.error("Error fetching images:", error));
  }, []);

  const updatePhoto = (updatedPhoto) => {
    setPhotos(photos.map(p => p.id === updatedPhoto.id ? updatedPhoto : p));
  };

  return (
    <Main>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<PhotoBrowser photos={photos} updatePhoto={updatePhoto} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Main>
  );
}

export default App;
