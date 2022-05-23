import { useEffect, useState } from 'react';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/Preloader';
import MainPage from './MainPage';
import { NavLink } from 'react-router-dom';
import SearchComponent from '../SearchComponent/SearchComponent';
import { connect } from 'react-redux';
import { getBreeds } from '../../redux/main-reducer';

function MainPageContainer({ breeds, preloader, getBreeds }) {

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getBreeds(currentPage-1);
  },[getBreeds, currentPage]);

  function onPageChanged(page) {
    setCurrentPage(page);
  }

  return (
    <>
      {preloader
        ? <Preloader />
        : <>
          {breeds &&
            <>
              <NavLink to="/dogs-info/favourites">Favourites</NavLink>
              <p>  </p>
              <NavLink to="/dogs-info/random">Random</NavLink>
              <p>  </p>
              <SearchComponent />
              <p>  </p>
              <MainPage breeds={breeds} />
            </>
          }
        </>
      }
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    breeds: state.mainPage.breeds,
    preloader: state.mainPage.preloader
  }
}

export default connect(mapStateToProps, {getBreeds})(MainPageContainer);