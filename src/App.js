import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FavouritesPageContainer from './components/FavoritesPage/FavouritesPageContainer';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import MainPageContainer from './components/MainPage/MainPageContainer';
import RandomPageContainer from './components/RandomPage/RandomPageContainer';
import SearchResult from './components/SearchComponent/SearchResult';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <HeaderComponent />
        <Routes>
          <Route path='/dogs-info' element={<MainPageContainer />} />
          <Route path='/dogs-info/favourites' element={<FavouritesPageContainer />} />
          <Route path='/dogs-info/random' element={<RandomPageContainer />} />
          <Route path='/dogs-info/search-result' element={<SearchResult />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
