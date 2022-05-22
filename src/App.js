import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FavouritesPageContainer from './components/FavoritesPage/FavouritesPageContainer';
import MainPageContainer from './components/MainPage/MainPageContainer';
import RandomPageContainer from './components/RandomPage/RandomPageContainer';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/dogs-info' element={<MainPageContainer />} />
          <Route path='/favourites' element={<FavouritesPageContainer />} />
          <Route path='/random' element={<RandomPageContainer />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
