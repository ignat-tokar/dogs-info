import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FavouritesPageContainer from './components/FavoritesPage/FavouritesPageContainer';
import MainPageContainer from './components/MainPage/MainPageContainer';
import RandomPageContainer from './components/RandomPage/RandomPageContainer';
import store from './redux/store';

function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/dogs-info' element={<MainPageContainer />} />
            <Route path='/dogs-info/favourites' element={<FavouritesPageContainer />} />
            <Route path='/dogs-info/random' element={<RandomPageContainer />} />
          </Routes>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
