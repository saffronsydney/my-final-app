import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HeaderMenu from './components/HeaderMenu';
import PhotoBrowser from './components/PhotoBrowser';
import Home from './components/Home';
import About from './components/About';
import FavoriteBar from './components/FavoriteBar';

const Main = styled.main``;

function App() {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php')
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

  const addFavorite = (photo) => {
    if (!favorites.some(fav => fav.id === photo.id)) {
      setFavorites([...favorites, photo]);
    }
  };

  const removeFavorite = (photoId) => {
    setFavorites(favorites.filter(fav => fav.id !== photoId));
  };

  return (
    <Main>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={
          <>
            <FavoriteBar favorites={favorites} removeFavorite={removeFavorite} />
            <PhotoBrowser photos={photos} updatePhoto={updatePhoto} addFavorite={addFavorite} />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </Main>
  );
}

export default App;
