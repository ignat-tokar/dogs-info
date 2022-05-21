import axios from 'axios';
import { useEffect, useState } from 'react';
import { breedsAPI, favouritesAPI, imagesAPI, votesAPI } from './api/api';
import './App.css';
import FavouritesPageContainer from './components/FavoritesPage/FavouritesPageContainer';
import MainPage from './components/MainPage/MainPage';
import MainPageContainer from './components/MainPage/MainPageContainer';


function App() {
  const [isMainPage, setIsMainPage] = useState(true);

  function showMainPage() {
    setIsMainPage(true);
  }

  function showFavouritesPage(){
    setIsMainPage(false);
  }

  return (
    <>
      {isMainPage
        ? <>
          <button onClick={showFavouritesPage}>Show Favorites</button>
          <MainPageContainer />
        </>
        : <>
          <button onClick={showMainPage}>Go Back</button>
          <FavouritesPageContainer />
        </>
      }
    </>
  );
}

export default App;
