import { useState } from 'react';
import './App.css';
import FavouritesPageContainer from './components/FavoritesPage/FavouritesPageContainer';
import MainPageContainer from './components/MainPage/MainPageContainer';
import RandomPageContainer from './components/RandomPage/RandomPageContainer';


function App() {
  const [isMainPage, setIsMainPage] = useState(true);
  const [isFavouritePage, setIsFavouritePage] = useState(false);

  function showMainPage() {
    setIsMainPage(true);
    setIsFavouritePage(false);
  }

  function showFavouritesPage(){
    setIsMainPage(false);
    setIsFavouritePage(true);
  }

  function showRandomPage(){
    setIsMainPage(false);
    setIsFavouritePage(false);
  }


  return (
    <>
      {isMainPage
        ? <>
          <button onClick={showFavouritesPage}>Show Favorites Breeds</button>
          <button onClick={showRandomPage}>Show Random Breed</button>
          <MainPageContainer />
        </>
        : 
          isFavouritePage
            ? <>
              <button onClick={showMainPage}>Go Back</button>
              <FavouritesPageContainer />
            </>
            : <>
              <button onClick={showMainPage}>Go Back</button>
              <RandomPageContainer />
            </>
      }
    </>
  );
}

export default App;
